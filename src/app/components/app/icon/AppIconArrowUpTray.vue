<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArrowUpTray v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil rauf in Ablage
en:
  ariaLabel: Arrow up to tray
</i18n>
