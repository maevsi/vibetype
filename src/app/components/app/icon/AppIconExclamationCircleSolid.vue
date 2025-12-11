<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsExclamationCircleSolid
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
  ariaLabel: Ausrufezeichen-Kreis
en:
  ariaLabel: Exclamation circle
</i18n>
