<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsLightBulb v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Glühbirne
en:
  ariaLabel: Light bulb
</i18n>
