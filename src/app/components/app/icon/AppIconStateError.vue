<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsXCircle v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: X in einem Kreis
en:
  ariaLabel: X inside a circle
</i18n>
