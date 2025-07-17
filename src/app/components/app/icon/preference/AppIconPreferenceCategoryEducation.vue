<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryEducation
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
  ariaLabel: Bücher und Doktorhut
en:
  ariaLabel: Books and square academic cap
</i18n>
