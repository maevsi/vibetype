<template>
  <NuxtLayout>
    <AppError
      :status-code="error.statusCode"
      :description="error.message"
      :stack="error.stack"
    />
    <!-- :status-message="error.statusMessage" -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const { error } = defineProps<{ error: NuxtError }>()

const { t } = useI18n()

// initialization
useAppLayout()

useHeadDefault({
  title: `${error.statusCode} - ${error.message}`,
})

defineOgImageComponent(
  'Default',
  {},
  {
    alt: t('globalSeoOgImageAlt', { siteName: t('globalSiteName') }),
  },
)
</script>
