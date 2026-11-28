<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <p class="text-body-small text-fg-2">{{ t('description') }}</p>
        <img
          v-if="previewUrl"
          :alt="t('preview')"
          class="max-h-64 self-center rounded-medium object-contain"
          :src="previewUrl"
        />
        <p
          v-if="isNoEvent"
          class="rounded-medium bg-surface-raised p-4 text-center text-fg-2"
          role="status"
        >
          {{ t('noEvent') }}
        </p>
        <div
          v-if="isReading"
          class="flex items-center justify-center gap-2 py-4 text-fg-2"
          role="status"
        >
          <AppSpinner aria-hidden="true" />
          {{ t('reading') }}
        </div>
        <template v-else>
          <AppButton
            v-if="isCameraAvailable"
            :aria-label="t('takePhoto')"
            class="w-full justify-center"
            @click="pickFromCamera"
          >
            <AppIconCamera />
            {{ t('takePhoto') }}
          </AppButton>
          <AppButton
            :aria-label="t('chooseFromLibrary')"
            class="w-full justify-center"
            :variant="isCameraAvailable ? 'secondary' : 'primary'"
            @click="pickFromLibrary"
          >
            <AppIconArrowUpTray />
            {{ t('chooseFromLibrary') }}
          </AppButton>
          <div class="flex items-center gap-4 text-body-small text-fg-2">
            <AppSeparator class="flex-1" />
            {{ t('or') }}
            <AppSeparator class="flex-1" />
          </div>
          <AppButton
            :aria-label="t('provideLink')"
            class="w-full justify-center"
            :to="localePath('event-ingest-url')"
            variant="secondary"
          >
            <AppIconLink />
            {{ t('provideLink') }}
          </AppButton>
        </template>
      </div>
      <EventIngestConsentDrawer
        v-model="isConsentDrawerOpen"
        @allowed="onConsentAllowed"
      />
      <EventIngestOwnershipDrawer
        v-model="isOwnershipDrawerOpen"
        :submission
        @own="createEvent"
        @sent="onSent"
      />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch'

const { t } = useI18n()
const alertError = useAlertError()
const { $csrfFetch } = useNuxtApp()
const localePath = useLocalePath()

// validation
await useSignInRequired()

// page
useHeadDefault({ title: t('title') })

// data
// the page records the consent itself, as a cookie ref of the drawer's own would not update this one
const { give: giveConsent, isGiven: isConsentGiven } = useEventIngestConsent()
const eventImported = useState<EventImported>(STATE_KEY_EVENT_IMPORTED)
const isConsentDrawerOpen = ref(false)
const isOwnershipDrawerOpen = ref(false)
const isNoEvent = ref(false)
const isReading = ref(false)
// asked for before the form opens, so nobody publishes someone else's event under their own account
const submission = ref<EventSubmission>()
const posterPending = ref<{ file: File; isCaptured: boolean }>()
const posterPicked = usePosterPicked()
const previewUrl = ref<string>()

// methods
const createEvent = async () => {
  if (!submission.value) return

  eventImported.value = await getEventImportedFromIngest(submission.value)
  await navigateTo(localePath('event-create'))
}
const onSent = async () => {
  toast.success(t('sent'))
  await navigateTo(localePath('dashboard'))
}
// shrinks the poster to the size the server reads, as a phone photo can exceed the request size limit
const readPosterAsBase64 = async (file: File) => {
  const bitmap = await createImageBitmap(file) // applies the orientation phone cameras store as metadata
  const scale = Math.min(
    1,
    POSTER_SIZE_MAXIMUM / Math.max(bitmap.width, bitmap.height),
  )
  const canvas = document.createElement('canvas')

  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)

  const context = canvas.getContext('2d')

  if (!context) throw new Error('Canvas is not available')

  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close()

  const base64Image = canvas.toDataURL('image/jpeg', 0.9).split(',')[1]

  if (!base64Image) throw new Error('Poster could not be read as base64')

  return base64Image
}
const onConsentAllowed = () => {
  const pending = posterPending.value

  giveConsent()
  posterPending.value = undefined
  if (pending) readPoster(pending.file, { isCaptured: pending.isCaptured })
}
const readPoster = async (
  file: File,
  { isCaptured = false }: { isCaptured?: boolean } = {},
) => {
  if (!isConsentGiven.value) {
    posterPending.value = { file, isCaptured }
    isConsentDrawerOpen.value = true
    return
  }

  // avoid memory leaks
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)

  previewUrl.value = URL.createObjectURL(file)
  isReading.value = true
  isNoEvent.value = false

  try {
    const base64Image = await readPosterAsBase64(file)
    const { output } = await $csrfFetch('/api/model/event/ingest/image', {
      body: { base64Image },
      method: 'POST',
    })

    if (!output?.is_event) {
      isNoEvent.value = true
      return
    }

    submission.value = {
      base64Image,
      description: output.description,
      end: output.end,
      isCaptured,
      location: output.location,
      name: output.name ?? '',
      start: output.start,
      url: output.url,
    }
    isOwnershipDrawerOpen.value = true
  } catch (error) {
    const status = error instanceof FetchError ? error.statusCode : undefined

    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n:
        status === 422
          ? t('errorModerated')
          : status === 429
            ? t('errorLimitReached')
            : t('errorReadFailed'),
    })
  } finally {
    isReading.value = false
  }
}

// lifecycle
const { isCameraAvailable, pickFromCamera, pickFromLibrary } =
  usePosterPicker(readPoster)

// the iOS app hands over posters shared to it from other apps
onMounted(async () => {
  window.webkit?.messageHandlers?.['poster-shared-request']?.postMessage(
    'poster-shared-request',
  )

  // a poster picked on the dashboard is read right away
  const picked = posterPicked.value

  if (picked) {
    posterPicked.value = undefined
    readPoster(picked.file, { isCaptured: picked.isCaptured })
    return
  }

  // the service worker stored a poster shared to the installed app
  const posterShared = await takePosterShared()

  if (posterShared) readPoster(posterShared)
})
onBeforeUnmount(() => {
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
})
</script>

<i18n lang="yaml">
de:
  chooseFromLibrary: Aus der Mediathek wählen
  description: Ein Veranstaltungsplakat entdeckt? Fotografiere es oder wähle ein Foto aus und schick uns die Veranstaltung, um Punkte zu sammeln. Eine externe KI liest die Angaben aus, damit Du nichts abtippen musst.
  errorLimitReached: Damit die Plakatjagd für alle verfügbar bleibt, gibt es ein Tageslimit, und das hast Du erreicht. Versuche es morgen erneut.
  errorModerated: Wir möchten, dass sich alle auf @.upper:{'globalSiteName'} willkommen fühlen, deshalb können wir dieses Foto nicht verwenden. Bitte versuche es mit einem anderen Plakat.
  errorReadFailed: Das Plakat konnte nicht gelesen werden.
  noEvent: Auf diesem Foto wurde keine Veranstaltung gefunden. Probiere ein anderes Foto.
  or: ODER
  preview: Vorschau
  provideLink: Link zu einer Webseite angeben
  reading: Plakat wird gelesen…
  sent: Danke für Deinen Fund! Sobald wir ihn annehmen, bringt er Dir Punkte.
  takePhoto: Foto aufnehmen
  title: Plakatjagd
en:
  chooseFromLibrary: Choose from library
  description: Spotted an event poster? Take or choose a photo and send the event to us to earn points. An external AI reads the details, so you don't have to type them.
  errorLimitReached: To keep poster hunting available for everyone, there's a daily limit, and you've reached it. Try again tomorrow.
  errorModerated: We want everyone to feel welcome on @.upper:{'globalSiteName'}, so we can't use this photo. Please try a different poster.
  errorReadFailed: The poster could not be read.
  noEvent: No event found on this photo. Try another photo.
  or: OR
  preview: Preview
  provideLink: Provide link to website
  reading: Reading poster…
  sent: Thanks for your find! Once we accept it, it earns you points.
  takePhoto: Take photo
  title: Poster hunting
</i18n>
