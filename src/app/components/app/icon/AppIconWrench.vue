<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsWrench v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Schraubenschlüssel
en:
  ariaLabel: Wrench
</i18n>
