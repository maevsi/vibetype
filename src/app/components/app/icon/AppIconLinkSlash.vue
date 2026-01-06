<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidLinkSlash v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Link entfernen
en:
  ariaLabel: Unlink
</i18n>
