<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidHeading v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Überschrift
en:
  ariaLabel: Heading
</i18n>
