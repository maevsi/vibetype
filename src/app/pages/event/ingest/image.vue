<template>
  <div class="flex flex-col gap-2 p-2">
    <div class="min-h-0 flex-1 p-2">
      <div
        class="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-(--figma-neutral-level-1)"
      >
        <video
          v-if="isCameraActive"
          ref="videoEl"
          autoplay
          class="size-full object-cover"
          muted
          playsinline
        />
        <img
          v-else-if="capturedDataUrl || previewUrl"
          :alt="t('imagePreviewAlt')"
          class="size-full object-cover"
          :src="capturedDataUrl ?? previewUrl"
        />
        <div
          v-else
          class="flex flex-col items-center gap-2 p-4 text-center text-(--figma-neutral-level-4)"
        >
          <svg
            aria-hidden="true"
            class="size-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
          <p class="text-sm font-semibold">{{ t('cameraUnavailable') }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2 p-2">
      <ButtonColored
        :aria-label="hasCapture ? t('submit') : t('takePhoto')"
        class="w-full"
        :disabled="isSubmitting || (!isCameraActive && !hasCapture)"
        @click="hasCapture ? submit() : takePhoto()"
      >
        <template #prefix>
          <IHeroiconsCamera aria-hidden="true" class="size-6" />
        </template>
        {{ hasCapture ? t('submit') : t('takePhoto') }}
      </ButtonColored>
      <ButtonColored
        :aria-label="hasCapture ? t('retake') : t('uploadFromGallery')"
        class="w-full"
        variant="secondary"
        @click="hasCapture ? retake() : triggerGalleryInput()"
      >
        {{ hasCapture ? t('retake') : t('uploadFromGallery') }}
      </ButtonColored>
    </div>
    <div class="flex items-center px-2">
      <div class="h-0.5 flex-1 rounded-full bg-(--figma-neutral-level-2)" />
      <span
        class="px-2 text-[13px] leading-4.5 font-semibold tracking-[-0.4px]"
      >
        {{ t('or') }}
      </span>
      <div class="h-0.5 flex-1 rounded-full bg-(--figma-neutral-level-2)" />
    </div>
    <div class="p-2">
      <ButtonColored
        :aria-label="t('provideLinkToWebsite')"
        class="w-full"
        :to="localePath('event-ingest-url')"
        variant="secondary"
      >
        {{ t('provideLinkToWebsite') }}
      </ButtonColored>
    </div>
    <canvas ref="canvasEl" class="hidden" />
    <input
      ref="galleryInput"
      accept="image/png,image/jpeg,image/gif"
      class="hidden"
      type="file"
      @change="handleFileSelect"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()
const alertError = useAlertError()
const localePath = useLocalePath()
const { $csrfFetch } = useNuxtApp()

const {
  capturedBase64,
  capturedDataUrl,
  hasCapture,
  isCameraActive,
  previewUrl,
  selectedFile,
  handleFileSelect,
  retake,
  takePhoto,
  triggerGalleryInput,
} = useCamera()

const isSubmitting = ref(false)

const submit = async () => {
  if (isSubmitting.value) return

  let base64: string | undefined

  if (capturedBase64.value) {
    base64 = capturedBase64.value
  } else if (selectedFile.value) {
    base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(selectedFile.value!)
      reader.onload = () => resolve((reader.result as string).split(',')[1]!)
      reader.onerror = reject
    })
  }

  if (!base64) return

  isSubmitting.value = true

  try {
    const { output } = await $csrfFetch<{ output: Record<string, unknown> }>(
      '/api/model/event/ingest/image',
      {
        body: { base64Image: base64 },
        method: 'POST',
      },
    )

    await $csrfFetch('/api/service/zammad/ingest/image', {
      body: output,
      method: 'POST',
    })
  } catch (error) {
    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n: t('submitFailed'),
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<i18n lang="yaml">
de:
  cameraUnavailable: Kamera nicht verfügbar. Bitte lade ein Bild hoch.
  imagePreviewAlt: Bildvorschau
  or: ODER
  provideLinkToWebsite: Link zur Website angeben
  retake: Erneut aufnehmen
  submit: Absenden
  submitFailed: Übermittlung fehlgeschlagen
  takePhoto: Foto aufnehmen
  uploadFromGallery: Aus Galerie hochladen
en:
  cameraUnavailable: Camera unavailable. Please upload an image instead.
  imagePreviewAlt: Image preview
  or: OR
  provideLinkToWebsite: Provide link to website
  retake: Retake
  submit: Submit
  submitFailed: Submission failed
  takePhoto: Take photo
  uploadFromGallery: Upload from gallery
</i18n>
