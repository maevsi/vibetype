<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArrowDownTray v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil runter in Ablage
en:
  ariaLabel: Arrow down to tray
</i18n>
