<template>
  <NuxtLayout>
    <VioError
      :status-code="error.statusCode"
      :status-message="error.statusMessage"
      :description="error.message"
      :stack="error.stack"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

export interface Props {
  error: NuxtError
}
const props = withDefaults(defineProps<Props>(), {})
const errorProp = toRef(() => props.error)

const { t } = useI18n()

// initialization
useAppLayout()

useHeadDefault({
  title: `${errorProp.value.statusCode} - ${errorProp.value.message}`,
})

defineOgImageComponent(
  'Default',
  {},
  {
    alt: t('globalSeoOgImageAlt', { siteName: t('globalSiteName') }),
  },
)
</script>
