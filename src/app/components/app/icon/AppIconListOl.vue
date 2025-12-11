<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidListOl v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Nummerierte Liste
en:
  ariaLabel: Ordered list
</i18n>
