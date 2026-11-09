<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsClipboardDocumentCheck
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
  ariaLabel: Benutzer bestätigt
en:
  ariaLabel: User checked
</i18n>
