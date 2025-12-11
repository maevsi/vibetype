<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsBars3 v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Menü
en:
  ariaLabel: Menu
</i18n>
