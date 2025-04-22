<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <h2
        class="text-lg font-semibold dark:text-[--semantic-base-text-primary]"
      >
        {{ selectedFiles.length ? t('selectCover') : t('addImages') }}
      </h2>
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
          <button
            class="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            @click="clearAll"
          >
            <span>{{ t('clearAll') }}</span>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BaseValidation } from '@vuelidate/core'
const { t } = useI18n()

const props = defineProps<{
  form: {
    images: File[]
    previewUrls: string[]
    coverImage: File | null
  }
  validation: BaseValidation
}>()

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFiles = ref<File[]>(props.form.images || [])
const previewUrls = ref<string[]>(props.form.previewUrls || [])
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
</script>

<i18n lang="yaml">
de:
  selectCover: Cover auswählen
  addImages: Bilder hinzufügen
  clearAll: Alle löschen
  addNewImage: Neues Bild hinzufügen
  plus: +
en:
  selectCover: Select cover
  addImages: Add images
  clearAll: Clear all
  addNewImage: Add new image
  plus: +
</i18n>
