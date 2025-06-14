<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategorySocial
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
  ariaLabel: Freundeskreis
en:
  ariaLabel: Circle of friends
</i18n>
