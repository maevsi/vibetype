<template>
  <div class="flex flex-col gap-6 px-2 py-2">
    <h1 class="px-2 text-2xl font-bold text-(--semantic-base-text-primary)">
      {{ title }}
    </h1>
    <EventSearch />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
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
