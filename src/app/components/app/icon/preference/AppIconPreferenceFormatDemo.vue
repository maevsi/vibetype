<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatDemo
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
  ariaLabel: Demo
en:
  ariaLabel: Demo
</i18n>
