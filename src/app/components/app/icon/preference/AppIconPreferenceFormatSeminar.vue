<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatSeminar
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
  ariaLabel: Seminar
en:
  ariaLabel: Seminar
</i18n>
