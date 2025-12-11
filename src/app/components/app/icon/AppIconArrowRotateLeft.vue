<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidArrowRotateLeft
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
  ariaLabel: Pfeil nach links drehen
en:
  ariaLabel: Rotate arrow left
</i18n>
