<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryFashionAndLifestyle
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
  ariaLabel: Kleiderbügel
en:
  ariaLabel: Coat Hanger
</i18n>
