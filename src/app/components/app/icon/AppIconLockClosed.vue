<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsLockClosed v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Geschlossenes Schloss
en:
  ariaLabel: Lock closed
</i18n>
