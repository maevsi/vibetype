<template>
  <div class="flex flex-1 flex-col">
    <LayoutPage>
      <!-- the search bar leads the page, so the heading is only there for assistive technology -->
      <h1 class="sr-only">{{ title }}</h1>
      <EventSearch />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Alle Veranstaltungen
en:
  title: All events
</i18n>
