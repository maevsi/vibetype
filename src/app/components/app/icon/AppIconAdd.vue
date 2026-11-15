<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsPlus v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Plus
en:
  ariaLabel: Plus
</i18n>
