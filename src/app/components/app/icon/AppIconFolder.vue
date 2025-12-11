<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsFolder v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Ordner
en:
  ariaLabel: Folder
</i18n>
