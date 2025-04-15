<template>
  <AppIcon v-slot="attributes">
    <IVibetypeVerifiedUser v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Haken in einem Schild
en:
  ariaLabel: Checkmark in a shield
</i18n>
