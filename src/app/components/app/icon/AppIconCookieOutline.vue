<template>
  <AppIcon v-slot="attributes">
    <IMaterialSymbolsCookieOutline
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
  ariaLabel: Keks
en:
  ariaLabel: Cookie
</i18n>
