<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryMusicAndEntertainment
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
  ariaLabel: Gitarre
en:
  ariaLabel: Guitar
</i18n>
