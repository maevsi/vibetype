<template>
  <AppIcon v-slot="attributes">
    <IVibetypeMoreVertical v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Drei vertikal gereihte Punkte
en:
  ariaLabel: Three vertically aligned dots
</i18n>
