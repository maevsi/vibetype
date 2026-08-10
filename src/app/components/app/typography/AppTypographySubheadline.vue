<template>
  <span
    :class="
      cn(
        'text-[15px] leading-5 tracking-[-0.4px]',
        variant === 'emphasized-italic' && 'font-semibold italic',
        variant === 'italic' && 'font-normal italic',
        variant === 'emphasized' && 'font-semibold',
        variant === 'regular' && 'font-normal',
        classProps,
      )
    "
  >
    <slot
      :class="
        cn(
          'text-[15px] leading-5 tracking-[-0.4px]',
          variant === 'emphasized-italic' && 'font-semibold italic',
          variant === 'italic' && 'font-normal italic',
          variant === 'emphasized' && 'font-semibold',
          variant === 'regular' && 'font-normal',
          classProps,
        )
      "
    />
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
