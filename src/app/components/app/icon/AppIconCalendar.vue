<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsCalendar v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kalender
en:
  ariaLabel: Calendar
</i18n>
