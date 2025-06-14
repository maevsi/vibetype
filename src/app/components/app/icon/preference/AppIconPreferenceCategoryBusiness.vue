<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryBusiness
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
  ariaLabel: Aktentasche
en:
  ariaLabel: Briefcase
</i18n>
