<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryPolitics
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
  ariaLabel: Politiker
en:
  ariaLabel: Politician
</i18n>
