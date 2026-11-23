<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsUser v-bind="attributes" :aria-label="t('ariaLabel')" />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Person
en:
  ariaLabel: User
</i18n>
