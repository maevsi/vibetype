<template>
  <AppIcon v-slot="attributes">
    <ISolarHourglassOutline v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Sanduhr
en:
  ariaLabel: Hourglass
</i18n>
