<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsFlag v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Meldung
en:
  ariaLabel: Report
</i18n>
