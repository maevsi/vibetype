<template>
  <span
    :class="
      cn(
        'text-[12px] leading-4 tracking-[-0.4px]',
        variant === 'emphasized-italic' && 'font-medium italic',
        variant === 'italic' && 'font-normal italic',
        variant === 'emphasized' && 'font-medium',
        variant === 'regular' && 'font-normal',
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
  variant?: 'emphasized-italic' | 'emphasized' | 'italic' | 'regular'
}>()
</script>
