<template>
  <NuxtLayout>
    <AppError
      :status-code="error.statusCode"
      :description="error.message"
      :stack="error.stack"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()

const { t } = useI18n()

// app
useAppLayout()

// page
const { statusName } = await useHttpStatusCode({ statusCode: error.statusCode })
useHeadDefault({ title: statusName })
defineOgImageComponent(
  'Default',
  {},
  {
    alt: t('globalSeoOgImageAlt', { siteName: t('globalSiteName') }),
  },
)
</script>
