<template>
  <AppContent>
    <LayoutPageTitle :title />
    <ContactList v-if="authentication.isSignedIn" />
    <LayoutCallToAction
      v-else
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
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

// template
const authentication = useAuthentication()
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde sie auf @.upper:{'globalSiteName'}
  anonymousCtaDescription: Wo sind deine Freunde?
  title: Kontaktbuch
en:
  anonymousCta: Find them on @.upper:{'globalSiteName'}
  anonymousCtaDescription: Where are your friends?
  title: Contact book
</i18n>
