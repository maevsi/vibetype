<template>
  <AppError v-if="error" :error="{ message: error.message, status: 500 }" />
  <div v-else class="flex flex-1 flex-col">
    <LayoutTopBar />
    <LayoutPage>
      <ContentLegalTerms v-model:error="error" />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
// External links to this page:
// - Google Play Store (trader: app vibetype)

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
