<template>
  <div
    v-if="content.pending.value"
    class="flex flex-1 items-center justify-center"
  >
    <AppLoaderLogo class="size-16" />
  </div>
  <AppError
    v-else-if="content.error.value"
    :error="{ message: content.error.value.message, status: 500 }"
  />
  <AppError
    v-else-if="!content.data.value"
    :error="{ data: { vibetype: t('errorContentMissing') }, status: 404 }"
  />
  <AppContent v-else :content />
</template>

<script setup lang="ts">
import type { OgImageComponents } from '#og-image/components'

// compiler
const { t } = useI18n()
const { path } = defineProps<{
  path: string
}>()

// content
const content = await useContent(path)

// seo
useHeadDefault({ title: computed(() => content.data.value?.title) })
if (content.data.value?.ogImage?.component) {
  // TODO: ensure the content's og image does overrides the default from `useHeadDefault` properly
  defineOgImage(
    content.data.value.ogImage.component as keyof OgImageComponents,
    content.data.value.ogImage.props,
  )
}
</script>

<i18n lang="yaml">
de:
  errorContentMissing: Der Inhalt ist nicht verfügbar.
en:
  errorContentMissing: The content is not available.
</i18n>
