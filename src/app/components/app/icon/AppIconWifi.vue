<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsWifi v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: WLAN
en:
  ariaLabel: WiFi
</i18n>
