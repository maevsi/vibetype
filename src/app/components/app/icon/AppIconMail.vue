<template>
  <AppIcon v-slot="attributes">
    <IVibetypeMail v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Brief
en:
  ariaLabel: Letter
</i18n>
