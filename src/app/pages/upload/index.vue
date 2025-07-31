<template>
  <div>
    <LayoutPageTitle :title="title" />
    <!-- "UploadGallery" must come after "ModalUploadSelection" for them to overlay properly! -->
    <UploadGallery v-if="isSignedIn" />
    <LayoutCallToAction
      v-else
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { isSignedIn } = useAuthInfo()

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
