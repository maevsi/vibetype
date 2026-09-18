<template>
  <Modal
    v-model="open"
    :is-submit-disabled="!selectedUploadId"
    @close="selectedUploadId = undefined"
    @submit="onSubmit"
  >
    <LazyUploadGallery
      is-readonly
      is-selectable
      @selection="selectProfilePictureUploadId"
    />
    <template #header>{{ t('header') }}</template>
  </Modal>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  select: [uploadId?: string | null]
}>()

const open = defineModel<boolean>()
const { t } = useI18n()

// data
const selectedUploadId = ref<string | null>()

// methods
const selectProfilePictureUploadId = (storageKey?: string | null) => {
  selectedUploadId.value = storageKey
}
const onSubmit = () => {
  emit('select', selectedUploadId.value)
  open.value = false
}
</script>

<i18n lang="yaml">
de:
  header: Wähle ein Profilbild
en:
  header: Select a profile picture
</i18n>
