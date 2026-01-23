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

const { error } = defineProps<{
  error: NuxtError &
    Required<Pick<NuxtError, 'status'>> & {
      data?: { vibetype?: string }
    }
}>()

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
const { statusName } = await useHttpStatusCode({ status: error.status })
useHeadDefault({ title: statusName })
defineOgImageComponent(
  'Default',
  {},
  {
    alt: t('globalSeoOgImageAlt'),
  },
)
</script>
