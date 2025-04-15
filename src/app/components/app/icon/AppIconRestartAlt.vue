<template>
  <AppIcon v-slot="attributes">
    <IVibetypeRestartAlt v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil in Form eines Kreises
en:
  ariaLabel: Arrow in the shape of a circle
</i18n>
