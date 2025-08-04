<template>
  <AppIcon v-slot="attributes">
    <IVibetypeHelp v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Fragezeichen
en:
  ariaLabel: Question mark
</i18n>
