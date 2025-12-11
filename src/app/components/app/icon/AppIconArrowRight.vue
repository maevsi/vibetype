<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArrowRight v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Rechts-Pfeil
en:
  ariaLabel: Arrow right
</i18n>
