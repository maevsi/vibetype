<template>
  <span
    :class="
      cn(
        'text-[17px] leading-5.5 font-semibold tracking-[-0.4px]',
        variant === 'italic' && 'italic',
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
  variant?: 'italic' | 'regular'
}>()
</script>
