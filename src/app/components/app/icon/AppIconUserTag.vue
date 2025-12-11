<template>
  <AppIcon v-slot="attributes">
    <IFa6SolidUserTag v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Benutzer-Tag
en:
  ariaLabel: User tag
</i18n>
