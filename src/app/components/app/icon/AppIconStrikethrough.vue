<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidStrikethrough v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Durchgestrichen
en:
  ariaLabel: Strikethrough
</i18n>
