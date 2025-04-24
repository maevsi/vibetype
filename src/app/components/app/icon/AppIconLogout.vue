<template>
  <AppIcon v-slot="attributes">
    <IVibetypeLogout v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil, der aus einem zur Hälfte geöffneten Rechteck hinaus zeigt
en:
  ariaLabel: Arrow pointing out of a half-open rectangle
</i18n>
