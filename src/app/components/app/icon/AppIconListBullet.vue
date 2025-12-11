<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsListBullet v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Liste
en:
  ariaLabel: List
</i18n>
