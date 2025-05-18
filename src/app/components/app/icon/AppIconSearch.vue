<template>
  <AppIcon v-slot="attributes">
    <IVibetypeSearch v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Lupe
en:
  ariaLabel: Magnifying glass
</i18n>
