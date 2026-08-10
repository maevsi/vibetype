<template>
  <span
    :class="
      cn(
        'text-[28px] leading-8.5 tracking-[-0.4px]',
        variant === 'emphasized' ? 'font-bold' : 'font-normal',
        classProps,
      )
    "
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined, variant = 'regular' } = defineProps<{
  class?: HtmlHTMLAttributes['class']
  variant?: 'emphasized' | 'regular'
}>()
</script>
