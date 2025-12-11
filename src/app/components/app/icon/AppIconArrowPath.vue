<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArrowPath v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Aktualisieren
en:
  ariaLabel: Refresh
</i18n>
