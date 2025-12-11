<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsLink v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Link
en:
  ariaLabel: Link
</i18n>
