<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatDemonstration
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
  ariaLabel: Demonstration
en:
  ariaLabel: Demonstration
</i18n>
