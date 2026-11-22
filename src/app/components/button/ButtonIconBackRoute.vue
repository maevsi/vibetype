<template>
  <AppButton
    :aria-label="ariaLabel || t('back')"
    size="none"
    :to
    variant="ghost"
    @click="to || store.navigateBack()"
  >
    <slot>
      <AppIconBack />
    </slot>
  </AppButton>
</template>

<script setup lang="ts">
const { ariaLabel = undefined, to = undefined } = defineProps<{
  ariaLabel?: string
  // leaves for this path instead of the previous page
  to?: string
}>()

const store = useStore()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  back: Zurück
en:
  back: Back
</i18n>
