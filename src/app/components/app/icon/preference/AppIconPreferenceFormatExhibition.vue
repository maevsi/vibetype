<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatExhibition
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
  ariaLabel: Ausstellung
en:
  ariaLabel: Exhibition
</i18n>
