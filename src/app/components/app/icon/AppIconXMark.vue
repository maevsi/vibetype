<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsXMark v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Schließen
en:
  ariaLabel: Close
</i18n>
