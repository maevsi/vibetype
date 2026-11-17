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
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const authentication = useAuthentication()

// validation
await useSignInRequired()

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
  title: Bildgalerie
en:
  title: Image gallery
</i18n>
