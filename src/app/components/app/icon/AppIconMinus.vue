<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidMinus v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Minus
en:
  ariaLabel: Minus
</i18n>
