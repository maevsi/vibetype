<template>
  <AppIcon v-slot="attributes">
    <IVibetypePerson v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Silhouette einer Person
en:
  ariaLabel: Silhouette of a person
</i18n>
