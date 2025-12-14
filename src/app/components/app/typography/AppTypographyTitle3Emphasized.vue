<template>
  <span
    :class="
      cn('text-xl leading-6.25 font-semibold -tracking-[0.4px]', classProps)
    "
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
