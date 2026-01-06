<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidArrowRotateRight
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
  ariaLabel: Pfeil nach rechts drehen
en:
  ariaLabel: Rotate arrow right
</i18n>
