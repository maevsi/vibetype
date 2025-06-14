<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatFestival
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
  ariaLabel: Girlanden
en:
  ariaLabel: Garlands
</i18n>
