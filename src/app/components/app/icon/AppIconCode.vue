<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidCode v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Code
en:
  ariaLabel: Code
</i18n>
