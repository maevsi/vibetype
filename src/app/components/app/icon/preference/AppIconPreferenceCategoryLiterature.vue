<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryLiterature
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
  ariaLabel: Bücher
en:
  ariaLabel: Books
</i18n>
