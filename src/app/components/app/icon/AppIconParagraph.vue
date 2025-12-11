<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidParagraph v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Absatz
en:
  ariaLabel: Paragraph
</i18n>
