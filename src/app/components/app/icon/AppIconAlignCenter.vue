<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidAlignCenter v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Zentriert ausrichten
en:
  ariaLabel: Align center
</i18n>
