<template>
  <div>
    <div v-if="api.isFetching" :class="classProps">
      <LoaderIndicatorPing v-if="indicator === 'ping'" />
      <LoaderIndicatorSpinner v-else-if="indicator === 'spinner'" />
      <LoaderIndicatorText v-else-if="indicator === 'text'" />
      <LoaderIndicatorText v-else />
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
  indicator = undefined,
} = defineProps<
  {
    api: UnwrapRef<Awaited<ReturnType<typeof useApiData>>>
    errorPgIds?: Record<string, string>
    indicator?: string
  } & { class?: HtmlHTMLAttributes['class'] }
>()

// computations
const errorMessages = computed(() =>
  getCombinedErrorMessages(api.errors, errorPgIds),
)
</script>

<script lang="ts">
export default {
  name: 'AppLoader',
}
</script>
