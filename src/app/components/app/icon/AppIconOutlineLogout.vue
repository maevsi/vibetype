<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsOutlineLogout v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Abmelden
en:
  ariaLabel: Logout
</i18n>
