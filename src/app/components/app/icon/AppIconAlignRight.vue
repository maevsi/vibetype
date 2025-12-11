<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidAlignRight v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Rechtsbündig ausrichten
en:
  ariaLabel: Align right
</i18n>
