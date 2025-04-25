<template>
  <AppIcon v-slot="attributes">
    <IVibetypeContract v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Vertrag
en:
  ariaLabel: Contract
</i18n>
