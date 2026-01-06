<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsTrash v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Mülleimer
en:
  ariaLabel: Trash
</i18n>
