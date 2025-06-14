<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatLecture
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
  ariaLabel: Vortrag
en:
  ariaLabel: Lecture
</i18n>
