<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <ClientOnly>
        <ConsentSettings @decided="onDecided" />
      </ClientOnly>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

const onDecided = () => toast.success(t('saved'))
</script>

<i18n lang="yaml">
de:
  saved: Gespeichert
  title: Datenschutz-Einstellungen
en:
  saved: Saved
  title: Privacy settings
</i18n>
