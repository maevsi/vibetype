<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArchiveBox v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Archivbox
en:
  ariaLabel: Archive box
</i18n>
