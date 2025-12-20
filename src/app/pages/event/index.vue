<template>
  <AppContent>
    <EventSearch />
  </AppContent>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})

const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Entdecken
en:
  title: Discover
</i18n>
