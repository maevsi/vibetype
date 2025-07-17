<template>
  <div
    class="flex h-screen flex-col"
    :data-is-loading="isLoading"
    data-testid="is-loading"
  >
    <NuxtLayout name="default-no-header">
      <AppError :error />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()

// i18n
const { t } = useI18n()

// loading
const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])
const isLoading = computed(() => !!loadingIds.value.length)
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))

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
