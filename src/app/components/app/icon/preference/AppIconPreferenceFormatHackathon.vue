<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatHackathon
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
  ariaLabel: Pokal
en:
  ariaLabel: Cup
</i18n>
