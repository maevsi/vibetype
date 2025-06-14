<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryArtAndCulture
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
  ariaLabel: Maske
en:
  ariaLabel: Mask
</i18n>
