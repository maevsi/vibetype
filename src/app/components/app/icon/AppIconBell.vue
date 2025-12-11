<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsBell v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Glocke
en:
  ariaLabel: Bell
</i18n>
