<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsPhoto v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Landschaft
en:
  ariaLabel: Landscape
</i18n>
