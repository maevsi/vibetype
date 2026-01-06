<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsMap v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Karte
en:
  ariaLabel: Map
</i18n>
