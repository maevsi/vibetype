<template>
  <AppIcon v-slot="attributes">
    <IFa6BrandsGooglePlay v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Google Play
en:
  ariaLabel: Google Play
</i18n>
