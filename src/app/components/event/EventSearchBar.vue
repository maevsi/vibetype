<template>
  <div
    class="sticky top-0 z-10 -mx-4 -mt-4 flex items-center gap-2 bg-glass px-4 py-4 backdrop-blur-xl"
  >
    <slot name="back" />
    <div class="min-w-0 flex-1">
      <slot>
        <AppInputSearch v-model="searchQuery" class="h-12" :placeholder />
      </slot>
    </div>
    <AppButton
      :aria-label="t('map')"
      :aria-pressed="isMapVisible"
      class="shrink-0"
      size="icon"
      :variant="isMapVisible ? 'primary' : 'secondary'"
      @click="isMapVisible = !isMapVisible"
    >
      <AppIconMapPin />
    </AppButton>
  </div>
</template>

<script setup lang="ts">
const { placeholder = undefined } = defineProps<{
  placeholder?: string
}>()

defineSlots<{
  back?: () => unknown
  default?: () => unknown
}>()

const isMapVisible = defineModel<boolean>('isMapVisible', { default: false })
const searchQuery = defineModel<string>('searchQuery', { default: '' })

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  map: Karte anzeigen
en:
  map: Show map
</i18n>
