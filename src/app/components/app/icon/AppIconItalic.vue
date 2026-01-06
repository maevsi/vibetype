<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidItalic v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Kursiv
en:
  ariaLabel: Italic
</i18n>
