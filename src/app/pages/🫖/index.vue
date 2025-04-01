<template>
  <div>
    <AppError :status-code="418" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// page
useHeadDefault({ title: t('title') })
</script>

<i18n lang="yaml">
de:
  title: Ich werd' keinen Kaffe machen
en:
  title: I won't make coffee
</i18n>
