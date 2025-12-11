<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsMapPinSolid v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kartennadel
en:
  ariaLabel: Map pin
</i18n>
