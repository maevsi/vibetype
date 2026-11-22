<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsCamera v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kamera
en:
  ariaLabel: Camera
</i18n>
