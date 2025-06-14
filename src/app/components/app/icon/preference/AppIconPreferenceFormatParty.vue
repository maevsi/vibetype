<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatParty
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
  ariaLabel: Diskokugel
en:
  ariaLabel: Disco ball
</i18n>
