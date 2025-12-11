<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsPencil v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Stift
en:
  ariaLabel: Pen
</i18n>
