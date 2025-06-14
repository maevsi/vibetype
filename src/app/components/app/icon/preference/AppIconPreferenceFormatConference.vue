<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatConference
      v-bind="attributes"
      :aria-label="t('ariaLabel')"
    />
  </AppIconPreference>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Präsentation
en:
  ariaLabel: Presentation
</i18n>
