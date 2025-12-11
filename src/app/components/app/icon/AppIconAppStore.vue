<template>
  <AppIcon v-slot="attributes">
    <IFa6BrandsAppStore v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: App Store
en:
  ariaLabel: App Store
</i18n>
