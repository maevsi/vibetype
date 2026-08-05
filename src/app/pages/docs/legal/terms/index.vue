<template>
  <AppError v-if="error" :error="{ message: error.message, status: 500 }" />
  <ContentLegalTerms v-else v-model:error="error" />
</template>

<script setup lang="ts">
const { t } = useI18n()
useHeadDefault({ title: t('title') })

const error = ref<Error | undefined>()
</script>

<i18n lang="yaml">
de:
  title: Allgemeine Geschäftsbedingungen
en:
  title: Terms and Conditions
</i18n>
