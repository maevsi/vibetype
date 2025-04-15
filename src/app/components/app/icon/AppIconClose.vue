<template>
  <AppIcon v-slot="attributes">
    <IVibetypeClose v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: X-Symbol
en:
  ariaLabel: X icon
</i18n>
