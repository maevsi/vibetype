<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidBold v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Fett
en:
  ariaLabel: Bold
</i18n>
