<template>
  <AppIconPreference v-slot="attributes">
    <IVibetypeColoredCategoryComedy
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
  ariaLabel: Fröhliches Gesicht
en:
  ariaLabel: Happy face
</i18n>
