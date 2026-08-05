<template>
  <div>
    <div v-if="api.isFetching" :class="classProps">
      <AppLoaderLogo />
    </div>
    <CardStateAlert v-if="errorMessages.length">
      <AppSpanList :span="errorMessages" />
    </CardStateAlert>
    <slot v-if="api.data" /><!--  && Object.keys(api.data).length -->
  </div>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes, UnwrapRef } from 'vue'

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
</script>
