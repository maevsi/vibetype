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
        <div class="flex flex-wrap gap-4">
          <AppButton
            :aria-label="t('takePhoto')"
            :variant="selectedFile ? 'secondary' : 'primary'"
            @click="triggerFileInput(templateInputCamera)"
          >
            <AppIconImage />
            {{ t('takePhoto') }}
          </AppButton>
          <AppButton
            :aria-label="t('chooseFromLibrary')"
            variant="secondary"
            @click="triggerFileInput(templateInputLibrary)"
          >
            <AppIconArrowUpTray />
            {{ t('chooseFromLibrary') }}
          </AppButton>
        </div>
        <AppButton
          v-if="selectedFile"
          :aria-label="t('readPoster')"
          class="self-end"
          :loading="isReading"
          @click="readPoster"
        >
          {{ t('readPoster') }}
        </AppButton>
      </div>
      <input
        ref="inputCamera"
        accept="image/jpeg,image/png"
        capture="environment"
        hidden
        type="file"
        @change="handleFileSelect"
      />
      <input
        ref="inputLibrary"
        accept="image/jpeg,image/png"
        hidden
        type="file"
        @change="handleFileSelect"
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
const templateInputCamera = useTemplateRef('inputCamera')
const templateInputLibrary = useTemplateRef('inputLibrary')

// validation
await useSignInRequired()

// page
useHeadDefault({ title: t('title') })

// data
const eventImported = useState<EventImported>(STATE_KEY_EVENT_IMPORTED)
const isNoEvent = ref(false)
const isReading = ref(false)
const previewUrl = ref<string>()
const selectedFile = ref<File>()

// methods
const handleFileSelect = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]

  if (!file) return

  // avoid memory leaks
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)

  isNoEvent.value = false
  previewUrl.value = URL.createObjectURL(file)
  selectedFile.value = file
}
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
const readPoster = async () => {
  if (!selectedFile.value) return

  isReading.value = true
  isNoEvent.value = false

  try {
    const { output } = await $csrfFetch('/api/model/event/ingest/image', {
      body: { base64Image: await readFileAsBase64(selectedFile.value) },
      method: 'POST',
    })

    if (!output?.is_event) {
      isNoEvent.value = true
      return
    }

    // the model answers without a time zone, which the browser takes as local time
    const getIsoString = (value: string | null) => {
      const date = value ? new Date(value) : undefined

      return date && !Number.isNaN(date.getTime())
        ? date.toISOString()
        : undefined
    }

    eventImported.value = await getEventImported({
      description: output.description,
      end: getIsoString(output.end),
      isInPerson: !!output.location,
      locationName: output.location,
      name: output.name ?? '',
      start: getIsoString(output.start),
      url: output.url,
    })
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
const triggerFileInput = (input: HTMLInputElement | null) => {
  if (!input) return

  input.value = ''
  input.click()
}
</script>

<i18n lang="yaml">
de:
  chooseFromLibrary: Aus der Mediathek wählen
  description: Fotografiere ein Veranstaltungsplakat oder wähle ein Foto aus. Aus dem Plakat erstellen wir einen Entwurf, den Du vor dem Speichern prüfen kannst.
  errorLimitReached: Du hast heute die maximale Anzahl an Plakaten gelesen. Versuche es morgen erneut.
  errorModerated: Das Foto enthält Inhalte, die nicht verarbeitet werden können.
  errorReadFailed: Das Plakat konnte nicht gelesen werden.
  noEvent: Auf diesem Foto wurde keine Veranstaltung gefunden. Probiere ein anderes Foto.
  preview: Vorschau
  readPoster: Plakat lesen
  takePhoto: Foto aufnehmen
  title: Plakatjagd
en:
  chooseFromLibrary: Choose from library
  description: Take a photo of an event poster or choose one. We create a draft from it that you can review before saving.
  errorLimitReached: You have reached today's maximum number of poster readings. Try again tomorrow.
  errorModerated: The photo contains content that cannot be processed.
  errorReadFailed: The poster could not be read.
  noEvent: No event found on this photo. Try another photo.
  preview: Preview
  readPoster: Read poster
  takePhoto: Take photo
  title: Poster hunting
</i18n>
