<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <AccountSearch />
    </LayoutPage>
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
