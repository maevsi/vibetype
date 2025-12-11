<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsPaperAirplane v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Papierflieger
en:
  ariaLabel: Paper airplane
</i18n>
