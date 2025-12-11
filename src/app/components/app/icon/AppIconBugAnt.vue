<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsBugAnt v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Fehler
en:
  ariaLabel: Bug
</i18n>
