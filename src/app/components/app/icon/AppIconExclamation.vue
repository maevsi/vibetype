<template>
  <AppIcon v-slot="attributes">
    <IVibetypeExclamation v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Ausrufezeichen
en:
  ariaLabel: Exclamation mark
</i18n>
