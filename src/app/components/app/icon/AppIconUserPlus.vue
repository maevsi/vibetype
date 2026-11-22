<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsUserPlus v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Person hinzufügen
en:
  ariaLabel: Add person
</i18n>
