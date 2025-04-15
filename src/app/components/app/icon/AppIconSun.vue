<template>
  <AppIcon v-slot="attributes">
    <IVibetypeSun v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Sonne
en:
  ariaLabel: Sun
</i18n>
