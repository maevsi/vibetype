<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <p class="text-body-small text-fg-2">{{ t('description') }}</p>
        <img
          v-if="previewUrl"
          :alt="t('preview')"
          class="rounded-medium"
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
const readFileAsBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const base64Image = (reader.result as string).split(',')[1]

      if (base64Image) resolve(base64Image)
      else reject(new Error('File could not be read as base64'))
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
const readPoster = async (file: File) => {
  // avoid memory leaks
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)

  previewUrl.value = URL.createObjectURL(file)
  isReading.value = true
  isNoEvent.value = false

  try {
    const { output } = await $csrfFetch('/api/model/event/ingest/image', {
      body: { base64Image: await readFileAsBase64(file) },
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
onMounted(() => {
  window.webkit?.messageHandlers?.['poster-shared-request']?.postMessage(
    'poster-shared-request',
  )

  // a poster picked on the dashboard is read right away
  const file = posterPicked.value

  if (file) {
    posterPicked.value = undefined
    readPoster(file)
  }
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
