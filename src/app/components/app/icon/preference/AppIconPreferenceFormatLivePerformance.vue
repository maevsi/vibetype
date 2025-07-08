<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatLivePerformance
      v-bind="attributes"
      :aria-label="t('ariaLabel')"
    />
  </AppIconPreference>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Bühne
en:
  ariaLabel: Stage
</i18n>
