<template>
  <AppIcon v-slot="attributes">
    <ISolarCalendarAddOutline
      v-bind="attributes"
      :aria-label="t('ariaLabel')"
    />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kalender hinzufügen
en:
  ariaLabel: Add calendar
</i18n>
