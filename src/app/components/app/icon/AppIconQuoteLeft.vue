<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidQuoteLeft v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Anführungszeichen links
en:
  ariaLabel: Quote left
</i18n>
