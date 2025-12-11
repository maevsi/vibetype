<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidAlignLeft v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Linksbündig ausrichten
en:
  ariaLabel: Align left
</i18n>
