<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategorySportsAndFitness
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
  ariaLabel: Sportsachen
en:
  ariaLabel: Sportswear
</i18n>
