<template>
  <AppIcon v-slot="attributes">
    <IVibetypeLegal v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Scales
en:
  ariaLabel: Waage
</i18n>
