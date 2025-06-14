<template>
  <AppIcon v-slot="attributes">
    <IVibetypeSettings v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Zahnrad
en:
  ariaLabel: Cog
</i18n>
