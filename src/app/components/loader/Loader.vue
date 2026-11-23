<template>
  <div :class="cn('flex flex-1 flex-col', classProps)">
    <LoaderError
      v-if="errorMessages.length"
      :messages="errorMessages"
      @retry="api.retry()"
    />
    <slot v-if="hasData" />
    <template v-else-if="api.isFetching">
      <LoaderPage v-if="isPage" />
      <AppLoaderPlaceholder v-else />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes, UnwrapRef } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  api,
  class: classProps = undefined,
  errorPgIds = undefined,
  isPage = false,
} = defineProps<
  {
    api: UnwrapRef<Awaited<ReturnType<typeof useApiData>>>
    errorPgIds?: Record<string, string>
    isPage?: boolean
  } & { class?: HtmlHTMLAttributes['class'] }
>()

// computations
const errorMessages = computed(() =>
  getCombinedErrorMessages(api.errors, errorPgIds),
)
// `api.data` is always an object (`useApiData` merges responses into it
// incrementally), so a plain truthiness check never reflects whether any
// response has actually arrived yet.
const hasData = computed(() => Object.keys(api.data).length > 0)
</script>
