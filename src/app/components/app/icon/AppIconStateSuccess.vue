<template>
  <AppIcon v-slot="attributes">
    <IVibetypeStateSuccess v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Haken in einem Kreis
en:
  ariaLabel: Checkmark inside a circle
</i18n>
