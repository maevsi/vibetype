<template>
  <AppModal
    v-model="open"
    :is-submit-disabled="!selectedUploadId"
    @close="selectedUploadId = undefined"
    @submit="onSubmit"
  >
    <LazyUploadGallery
      :aspect-ratio
      is-readonly
      is-selectable
      @selection="onSelection"
    />
    <template #header>
      <slot name="header">{{ t('header') }}</slot>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
const { aspectRatio = undefined } = defineProps<{
  aspectRatio?: number
}>()

const emit = defineEmits<{
  select: [uploadId?: string | null, storageKey?: string | null]
}>()

const open = defineModel<boolean>()
const { t } = useI18n()

// data
const selectedUploadId = ref<string | null>()
const selectedStorageKey = ref<string | null>()

// methods
const onSelection = (uploadId?: string | null, storageKey?: string | null) => {
  selectedUploadId.value = uploadId
  selectedStorageKey.value = storageKey
}
const onSubmit = () => {
  emit('select', selectedUploadId.value, selectedStorageKey.value)
  open.value = false
}
</script>

<i18n lang="yaml">
de:
  header: Wähle ein Profilbild
en:
  header: Select a profile picture
</i18n>
