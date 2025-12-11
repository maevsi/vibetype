<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsXCircleSolid v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: X-Kreis
en:
  ariaLabel: X circle
</i18n>
