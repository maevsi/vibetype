<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsHeart v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Herz
en:
  ariaLabel: Heart
</i18n>
