<template>
  <AppIcon v-slot="attributes">
    <IVibetypeArrowForward v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil nach vorn
en:
  ariaLabel: Arrow forward
</i18n>
