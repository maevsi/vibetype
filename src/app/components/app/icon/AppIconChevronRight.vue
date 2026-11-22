<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsChevronRight v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeil nach rechts
en:
  ariaLabel: Arrow right
</i18n>
