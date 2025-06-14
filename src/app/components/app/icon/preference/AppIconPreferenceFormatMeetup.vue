<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredFormatMeetup
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
  ariaLabel: Meetup
en:
  ariaLabel: Meetup
</i18n>
