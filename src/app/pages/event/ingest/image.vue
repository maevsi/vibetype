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
const eventImported = useState<EventImported>(STATE_KEY_EVENT_IMPORTED)
const isNoEvent = ref(false)
const isReading = ref(false)
const posterPicked = usePosterPicked()
const previewUrl = ref<string>()

// methods
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
const readPoster = async (file: File) => {
  // avoid memory leaks
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)

  previewUrl.value = URL.createObjectURL(file)
  isReading.value = true
  isNoEvent.value = false

  try {
    const { output } = await $csrfFetch('/api/model/event/ingest/image', {
      body: { base64Image: await readPosterAsBase64(file) },
      method: 'POST',
    })

    if (!output?.is_event) {
      isNoEvent.value = true
      return
    }

    eventImported.value = await getEventImportedFromIngest(output)
    await navigateTo(localePath('event-create'))
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
  const file = posterPicked.value

  if (file) {
    posterPicked.value = undefined
    readPoster(file)
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
  description: Fotografiere ein Veranstaltungsplakat oder wähle ein Foto aus. Aus dem Plakat erstellen wir einen Entwurf, den Du vor dem Speichern prüfen kannst.
  errorLimitReached: Du hast heute die maximale Anzahl an Plakaten gelesen. Versuche es morgen erneut.
  errorModerated: Das Foto enthält Inhalte, die nicht verarbeitet werden können.
  errorReadFailed: Das Plakat konnte nicht gelesen werden.
  noEvent: Auf diesem Foto wurde keine Veranstaltung gefunden. Probiere ein anderes Foto.
  or: ODER
  preview: Vorschau
  provideLink: Link zu einer Webseite angeben
  reading: Plakat wird gelesen…
  takePhoto: Foto aufnehmen
  title: Plakatjagd
en:
  chooseFromLibrary: Choose from library
  description: Take a photo of an event poster or choose one. We create a draft from it that you can review before saving.
  errorLimitReached: You have reached today's maximum number of poster readings. Try again tomorrow.
  errorModerated: The photo contains content that cannot be processed.
  errorReadFailed: The poster could not be read.
  noEvent: No event found on this photo. Try another photo.
  or: OR
  preview: Preview
  provideLink: Provide link to website
  reading: Reading poster…
  takePhoto: Take photo
  title: Poster hunting
</i18n>
