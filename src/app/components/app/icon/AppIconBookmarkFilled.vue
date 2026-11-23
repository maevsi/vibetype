<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsBookmarkSolid v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Lesezeichen
en:
  ariaLabel: Bookmark
</i18n>
