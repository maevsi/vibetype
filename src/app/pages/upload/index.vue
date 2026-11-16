<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      {{ title }}
      <template #back>
        <ButtonIconBackRoute />
      </template>
    </LayoutTopBar>
    <div class="flex flex-1 flex-col gap-4 p-4 md:px-8">
      <!-- "UploadGallery" must come after "ModalUploadSelection" for them to overlay properly! -->
      <UploadGallery v-if="authentication.isSignedIn" />
      <LayoutCallToAction
        v-else
        :call-to-action="t('anonymousCta')"
        :call-to-action-description="t('anonymousCtaDescription')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const authentication = useAuthentication()

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
  anonymousCtaDescription: Gibt es Fotos von dir und deinen Freunden?
  title: Bildgalerie
en:
  anonymousCta: Find them on @.upper:{'globalSiteName'}
  anonymousCtaDescription: Are there photos of you and your friends?
  title: Image gallery
</i18n>
