<template>
  <div class="w-full max-w-md self-center px-3 pt-4 lg:px-6">
    <button
      :aria-label="t('back')"
      class="flex size-10 items-center justify-center"
      @click="$emit('back')"
    >
      <AppIconArrowLeft class="size-6" />
    </button>
    <FormAuthHeader :key="headerKey" class="mt-4" :title-id>
      <template #title>
        <slot name="title" />
      </template>
      <template v-if="$slots.subtitle" #subtitle>
        <slot name="subtitle" />
      </template>
    </FormAuthHeader>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headerKey?: string | number
  titleId?: string
}>()

defineEmits<{
  back: []
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  back: Zurück
en:
  back: Back
</i18n>
