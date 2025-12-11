<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsCheckCircleSolid
      v-bind="attributes"
      :aria-label="t('ariaLabel')"
    />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Haken-Kreis
en:
  ariaLabel: Check circle
</i18n>
