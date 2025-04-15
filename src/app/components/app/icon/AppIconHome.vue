<template>
  <AppIcon v-slot="attributes">
    <IVibetypeHome v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Haus
en:
  ariaLabel: House
</i18n>
