<template>
  <AppIcon v-slot="attributes">
    <IVibetypeNetworkIntelligence
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
  ariaLabel: Gehirn
en:
  ariaLabel: Brain
</i18n>
