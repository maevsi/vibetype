<template>
  <AppContent v-if="content.data.value" :content />
  <AppLoaderPlaceholder v-else-if="content.pending.value" />
</template>

<script setup lang="ts">
import type { OgImageComponents } from '#og-image/components'

import type { AppErrorInput } from '~~/shared/utils/error'

// compiler
const { t } = useI18n()
const { path } = defineProps<{
  path: string
}>()

const modelError = defineModel<AppErrorInput>('error')

// content
// Awaited on the server only, so client navigations show the page right away
// instead of waiting for the content query
const content = useContent(path)
if (import.meta.server) await content

watch(
  () =>
    [content.pending.value, content.error.value, content.data.value] as const,
  ([pending, error, data]) => {
    if (error) {
      modelError.value = { message: error.message, status: 500 }
    } else if (!pending && !data) {
      modelError.value = {
        data: { vibetype: t('errorContentMissing') },
        status: 404,
      }
    } else {
      modelError.value = undefined
    }
  },
  { immediate: true },
)

// seo
useHeadDefault({ title: computed(() => content.data.value?.title) })
if (content.data.value?.ogImage?.component) {
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
