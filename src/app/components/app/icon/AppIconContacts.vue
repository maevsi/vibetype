<template>
  <AppIcon v-slot="attributes">
    <IVibetypeContacts v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Silhouette einer Person in einem Rechteck
en:
  ariaLabel: Silhouette of a person in a rectangle
</i18n>
