<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsQrCode v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: QR-Code
en:
  ariaLabel: QR code
</i18n>
