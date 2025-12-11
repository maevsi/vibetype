<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidListUl v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Aufzählungsliste
en:
  ariaLabel: Unordered list
</i18n>
