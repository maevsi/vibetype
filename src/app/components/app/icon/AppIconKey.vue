<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsKey v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Schlüssel
en:
  ariaLabel: Key
</i18n>
