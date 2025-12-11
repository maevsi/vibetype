<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsBellAlert v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Glocke mit Benachrichtigung
en:
  ariaLabel: Bell alert
</i18n>
