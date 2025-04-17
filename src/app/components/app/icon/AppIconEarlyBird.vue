<template>
  <AppIcon v-slot="attributes">
    <IVibetypeColoredEarlyBird
      v-bind="attributes"
      :aria-label="t('ariaLabel')"
    />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Vogel
en:
  ariaLabel: Bird
</i18n>
