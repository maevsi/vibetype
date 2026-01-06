<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsClipboard v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Zwischenablage
en:
  ariaLabel: Clipboard
</i18n>
