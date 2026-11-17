<template>
  <AppButton
    :aria-label="ariaLabel || t('back')"
    size="none"
    variant="ghost"
    @click="store.navigateBack()"
  >
    <slot>
      <AppIconBack />
    </slot>
  </AppButton>
</template>

<script setup lang="ts">
const { ariaLabel = undefined } = defineProps<{
  ariaLabel?: string
}>()

const store = useStore()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  back: zurück
en:
  back: back
</i18n>
