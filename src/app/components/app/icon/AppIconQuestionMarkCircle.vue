<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsQuestionMarkCircle
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
  ariaLabel: Fragezeichen-Kreis
en:
  ariaLabel: Question mark circle
</i18n>
