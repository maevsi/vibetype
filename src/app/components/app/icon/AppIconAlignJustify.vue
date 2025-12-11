<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidAlignJustify v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Blocksatz ausrichten
en:
  ariaLabel: Align justify
</i18n>
