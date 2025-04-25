<template>
  <AppIcon v-slot="attributes">
    <IVibetypeBack v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil nach links
en:
  ariaLabel: Arrow to the left
</i18n>
