<template>
  <div class="space-y-6">
    <div class="space-y-4">
      <h2
        class="text-lg font-semibold dark:text-[--semantic-base-text-primary]"
      >
        {{ selectedFiles.length ? t('selectCover') : t('addImages') }}
      </h2>

      <div v-if="!selectedFiles.length" class="space-y-4">
        <div
          class="dark:border-(semantic-base-line) rounded-xl border-2 border-dashed border-gray-300 p-12"
        >
          <div class="flex flex-col items-center justify-center text-center">
            <div class="mb-4">
              <svg
                class="h-12 w-12 text-gray-400 dark:text-[--semantic-base-text-secondary]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M20.4 14.5L16 10 4 20" />
              </svg>
            </div>
            <div class="space-y-2">
              <h3
                class="text-xl font-medium dark:text-[--semantic-base-text-primary]"
              >
                {{ t('uploadFiles') }}
              </h3>
              <p
                class="text-sm text-gray-500 dark:text-[--semantic-base-text-secondary]"
              >
                {{ t('fileTypes') }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-full">
          <ButtonColored
            :aria-label="t('selectFromDevice')"
            variant="secondary"
            class="ml-auto"
            @click="triggerFileInput"
          >
            {{ t('selectFromDevice') }}
          </ButtonColored>
        </div>
      </div>

      <div v-else>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="(file, index) in selectedFiles"
            :key="index"
            class="relative"
          >
            <div
              class="rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-surface) p-2 pb-4 sm:p-4 sm:pb-6 md:rounded-2xl"
            >
              <div
                class="relative aspect-[4/3] w-full overflow-hidden rounded-md"
                :class="[
                  selectedCover === index
                    ? 'border-2 border-(--accent-strong)'
                    : 'border-2 border-(--semantic-base-line)',
                ]"
              >
                <img
                  :src="previewUrls[index]"
                  class="h-full w-full object-cover"
                />
              </div>

              <div
                class="mt-1 flex items-center justify-between px-1 sm:mt-2 sm:px-2"
              >
                <div
                  class="flex h-6 w-6 items-center justify-center border bg-white sm:h-8 sm:w-8"
                >
                  <input
                    v-model="selectedCover"
                    type="radio"
                    :name="'cover'"
                    :value="index"
                    class="h-3.5 w-3.5 rounded-full border text-[#00A24C] focus:ring-0 sm:h-5 sm:w-5"
                  />
                </div>

                <div>
                  <button class="p-1 sm:p-1.5" @click="removeFile(index)">
                    <X class="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
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
import { X } from 'lucide-vue-next'

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
  uploadFiles: Dateien hochladen
  fileTypes: PNG, JPG, GIF bis zu 10 MB
  selectFromDevice: Vom Gerät auswählen
  clearAll: Alle löschen
  addNewImage: Neues Bild hinzufügen
  plus: +

en:
  selectCover: Select cover
  addImages: Add images
  uploadFiles: Upload files
  fileTypes: PNG, JPG, GIF up to 10 MB
  selectFromDevice: Select from device
  clearAll: Clear all
  addNewImage: Add new image
  plus: +
</i18n>
