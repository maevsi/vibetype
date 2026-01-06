<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsEye v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Auge
en:
  ariaLabel: Eye
</i18n>
