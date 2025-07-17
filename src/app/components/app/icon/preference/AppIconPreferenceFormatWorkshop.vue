<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatWorkshop
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
  ariaLabel: Workshop
en:
  ariaLabel: Workshop
</i18n>
