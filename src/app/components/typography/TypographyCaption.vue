<template>
  <span
    :class="
      cn('text-xs leading-[160%] font-light tracking-[0.25%]', classProps)
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
