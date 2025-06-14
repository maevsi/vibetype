<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryFoodAndDrink
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
  ariaLabel: Hamburger mit Getränk
en:
  ariaLabel: Hamburger with drink
</i18n>
