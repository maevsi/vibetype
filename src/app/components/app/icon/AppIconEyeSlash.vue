<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsEyeSlash v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Auge durchgestrichen
en:
  ariaLabel: Eye slash
</i18n>
