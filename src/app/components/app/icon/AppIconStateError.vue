<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsExclamationCircle
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
  ariaLabel: Ausrufezeichen in einem Kreis
en:
  ariaLabel: Exclamation mark inside a circle
</i18n>
