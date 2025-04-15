<template>
  <AppIcon v-slot="attributes">
    <IVibetypeStateWarning v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Ausrufezeichen in einem Warndreieck in einem Kreis
en:
  ariaLabel: Exclamation mark in a warning triangle in a circle
</i18n>
