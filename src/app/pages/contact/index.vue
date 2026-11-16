<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      {{ title }}
      <template #back>
        <ButtonIconBackRoute />
      </template>
    </LayoutTopBar>
    <div class="flex flex-1 flex-col gap-4 p-4 md:px-8">
      <ContactList v-if="authentication.isSignedIn" />
      <LayoutCallToAction
        v-else
        :call-to-action="t('anonymousCta')"
        :call-to-action-description="t('anonymousCtaDescription')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const authentication = useAuthentication()
const { t } = useI18n()

// compiler
definePageMeta({
  layout: 'default-no-header',
})

// data
const title = t('title')

// initialization
useHeadDefault({ title })
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
