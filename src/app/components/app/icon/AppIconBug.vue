<template>
  <AppIcon v-slot="attributes">
    <IVibetypeBug v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Käfer
en:
  ariaLabel: Bug
</i18n>
