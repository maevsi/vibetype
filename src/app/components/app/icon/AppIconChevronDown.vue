<template>
  <AppIcon v-slot="attributes">
    <IVibetypeChevronDown v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil
en:
  ariaLabel: Arrow
</i18n>
