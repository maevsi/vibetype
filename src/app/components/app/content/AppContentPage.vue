<template>
  <AppContent :content />
</template>

<script setup lang="ts">
import type { OgImageComponents } from '#og-image/components'

// compiler
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
