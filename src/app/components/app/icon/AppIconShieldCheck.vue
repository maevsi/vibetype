<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsShieldCheck v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Schild mit Haken
en:
  ariaLabel: Shield check
</i18n>
