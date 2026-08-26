<template>
  <div>
    <div
      v-if="api.isFetching && !hasData"
      :class="cn('flex flex-1 items-center justify-center', classProps)"
    >
      <AppLoaderLogo class="size-16" />
    </div>
    <CardStateAlert v-if="errorMessages.length">
      <AppSpanList :span="errorMessages" />
    </CardStateAlert>
    <slot v-if="hasData" />
  </div>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes, UnwrapRef } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  api,
  class: classProps = undefined,
  errorPgIds = undefined,
} = defineProps<
  {
    api: UnwrapRef<Awaited<ReturnType<typeof useApiData>>>
    errorPgIds?: Record<string, string>
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
