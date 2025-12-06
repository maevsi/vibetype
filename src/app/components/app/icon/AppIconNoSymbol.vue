<template>
  <AppIcon v-slot="attributes">
    <IVibetypeNoSymbol v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kreis mit einem schrägen Strich
en:
  ariaLabel: Circle with a diagonal line
</i18n>
