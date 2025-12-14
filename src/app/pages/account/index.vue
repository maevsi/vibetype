<template>
  <AppContent class="flex flex-col gap-4">
    <AccountSearch />
  </AppContent>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Personen
en:
  title: People
</i18n>
