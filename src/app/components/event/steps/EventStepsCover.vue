<template>
  <div class="mt-8 flex flex-col gap-4">
    <AppStepIndex :count="5" :index="4" />
    <TypographyH6>{{ t('title') }}</TypographyH6>
    <div class="flex flex-col gap-4">
      <TypographySubtitleMedium>
        {{ selectedFiles.length ? t('selectImages') : '' }}
      </TypographySubtitleMedium>
      <EventFileUploadEmptyState
        v-if="!selectedFiles.length"
        @trigger-upload="triggerFileInput"
      />
      <template v-else>
        <EventFilePreviewGrid
          v-model="selectedCover"
          :files="selectedFiles"
          :preview-urls="previewUrls"
          @remove="removeFile"
        />
        <div class="mt-4 flex items-center justify-between">
          <button class="flex items-center gap-2" @click="clearAll">
            <TypographyLabel class="text-(--semantic-base-text-tertiary)">
              {{ t('clearAll') }}
            </TypographyLabel>
          </button>
          <ButtonColored
            :aria-label="t('addNewImage')"
            variant="secondary"
            @click="triggerFileInput"
          >
            {{ t('addNewImage') }}
            <span class="ml-2">{{ t('plus') }}</span>
          </ButtonColored>
        </div>
      </template>
    </div>
    <input
      ref="fileInput"
      type="file"
      class="hidden"
      accept="image/png,image/jpeg,image/gif"
      multiple
      @change="handleFileSelect"
    />
    <div class="flex flex-col gap-2">
      <ButtonColored
        variant="primary"
        class="w-full"
        :aria-label="t('button')"
        @click="emit('next')"
      >
        {{ t('button') }}
      </ButtonColored>
      <ButtonColored
        variant="secondary"
        class="w-full"
        :aria-label="t('skip')"
        @click="emit('next')"
      >
        {{ t('skip') }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const props = defineProps<{
  form: {
    images: File[]
    previewUrls: string[]
    coverImage: File | null
  }
  validation: BaseValidation
}>()

const { t } = useI18n()
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFiles = ref<File[]>([...props.form.images])
const previewUrls = ref<string[]>([...props.form.previewUrls])
const selectedCover = ref(0)

const triggerFileInput = () => {
  if (selectedFiles.value.length >= 6) return
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return
  const files = Array.from(input.files)
  const validFiles = files.filter(
    (file) =>
      ['image/png', 'image/jpeg', 'image/gif'].includes(file.type) &&
      file.size <= 10 * 1024 * 1024,
  )
  selectedFiles.value.push(
    ...validFiles.slice(0, 6 - selectedFiles.value.length),
  )
  validFiles.forEach((file) =>
    previewUrls.value.push(URL.createObjectURL(file)),
  )
  emitFormUpdate()
}

const removeFile = (index: number) => {
  const url = previewUrls.value[index]
  if (url) {
    URL.revokeObjectURL(url)
  }
  selectedFiles.value.splice(index, 1)
  previewUrls.value.splice(index, 1)
  if (selectedCover.value === index) {
    selectedCover.value = 0
  }
  emitFormUpdate()
}

const clearAll = () => {
  previewUrls.value.forEach((url) => URL.revokeObjectURL(url))
  selectedFiles.value = []
  previewUrls.value = []
  selectedCover.value = 0
  emitFormUpdate()
}

const emitFormUpdate = () => {
  emit('updateForm', {
    images: selectedFiles.value,
    previewUrls: previewUrls.value,
    coverImage: selectedFiles.value[selectedCover.value] || null,
  })
}

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
  next: []
}>()
</script>

<i18n lang="yaml">
de:
  addNewImage: Neues Bild hinzufügen
  button: Next
  clearAll: Alle löschen
  plus: +
  selectImages: Bilder auswählen
  skip: Überspringen
  title: Bilder und Highlights
en:
  addNewImage: Add new image
  button: Next
  clearAll: Clear all
  plus: +
  selectImages: Select Images
  skip: Skip
  title: Images and Highlights
</i18n>
