<template>
  <AppIcon v-slot="attributes">
    <IVibetypeToday v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kalender mit markiertem Tag
en:
  ariaLabel: Calendar with marked day
</i18n>
