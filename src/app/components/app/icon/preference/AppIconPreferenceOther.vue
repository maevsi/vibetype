<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredOther v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIconPreference>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Symbole
en:
  ariaLabel: Symbols
</i18n>
