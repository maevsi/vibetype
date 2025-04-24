<template>
  <div class="flex flex-col gap-4">
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
        <div class="flex flex-col gap-2">
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
        @click="$emit('triggerUpload')"
      >
        {{ t('selectFromDevice') }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

defineEmits<{
  triggerUpload: []
}>()
</script>

<i18n lang="yaml">
de:
  uploadFiles: Dateien hochladen
  fileTypes: PNG, JPG, GIF bis zu 10 MB
  selectFromDevice: Vom Gerät auswählen
en:
  uploadFiles: Upload files
  fileTypes: PNG, JPG, GIF up to 10 MB
  selectFromDevice: Select from device
</i18n>
