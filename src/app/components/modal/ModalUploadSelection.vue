<template>
  <AppDrawer
    v-model="open"
    class="sm:max-w-lg"
    direction="right"
    @close="selectedUploadId = undefined"
  >
    <LazyUploadGallery
      :aspect-ratio
      is-readonly
      is-selectable
      @selection="onSelection"
    />
    <template #title>
      <slot name="header">{{ t('header') }}</slot>
    </template>
    <template #footer>
      <AppButton
        :aria-label="t('select')"
        :disabled="!selectedUploadId"
        @click="onSubmit"
      >
        {{ t('select') }}
        <template #prefix>
          <AppIconCheckCircleSolid />
        </template>
      </AppButton>
    </template>
  </AppDrawer>
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
  select: Auswählen
en:
  header: Select a profile picture
  select: Select
</i18n>
