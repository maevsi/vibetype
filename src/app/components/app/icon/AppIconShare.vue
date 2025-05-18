<template>
  <AppIcon v-slot="attributes">
    <IVibetypeShare v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil von unten nach rechts
en:
  ariaLabel: Arrow from bottom to right
</i18n>
