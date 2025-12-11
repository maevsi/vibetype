<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArrowLeft v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Links-Pfeil
en:
  ariaLabel: Arrow left
</i18n>
