<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsPrinter v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Drucker
en:
  ariaLabel: Printer
</i18n>
