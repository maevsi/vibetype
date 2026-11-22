<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <UploadGallery v-if="authentication.isSignedIn" />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const authentication = useAuthentication()

// validation
await useSignInRequired()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Bildgalerie
en:
  title: Image gallery
</i18n>
