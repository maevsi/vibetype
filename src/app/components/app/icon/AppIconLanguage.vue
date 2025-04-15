<template>
  <AppIcon v-slot="attributes">
    <IVibetypeLanguage v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Globus
en:
  ariaLabel: Globe
</i18n>
