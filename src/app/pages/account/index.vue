<template>
  <div class="flex flex-col gap-4">
    <h1>
      {{ title }}
    </h1>
    <AccountSearch />
  </div>
</template>

<script setup lang="ts">
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
