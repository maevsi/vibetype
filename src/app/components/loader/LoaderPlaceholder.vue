<template>
  <div
    :class="
      cn(
        'loader-placeholder flex flex-1 items-center justify-center',
        classProps,
      )
    "
    role="status"
  >
    <AppLoaderLogo class="size-16" />
    <span class="sr-only">{{ t('globalLoading') }}</span>
  </div>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()

const { t } = useI18n()
</script>

<style scoped>
/* Delayed in CSS rather than by a timer, so server and client render the same
markup and loads finishing within the delay never show a loader at all */
.loader-placeholder {
  animation: loader-placeholder-appear 150ms ease-out 200ms both;
}

@keyframes loader-placeholder-appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
