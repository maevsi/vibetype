<template>
  <div>
    <LayoutPageTitle :is-button-event-create-shown="false" :title="title" />
    <FormEvent v-if="authentication.isSignedIn" />
    <LayoutCallToAction
      v-else
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const authentication = useAuthentication()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf @.upper:{'globalSiteName'}
  anonymousCtaDescription: Du suchst einen liebevollen Ort für deine Veranstaltung?
  title: Veranstaltung erstellen
en:
  anonymousCta: Find it on @.upper:{'globalSiteName'}
  anonymousCtaDescription: Are you looking for a loving place for your event?
  title: Create event
</i18n>
