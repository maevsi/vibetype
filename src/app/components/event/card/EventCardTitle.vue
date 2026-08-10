<template>
  <span
    :class="
      cn(
        'line-clamp-2 text-base leading-5 font-semibold tracking-[0.15%] wrap-break-word',
        variant === 'highlight' && 'line-clamp-3 text-lg leading-[130%]',
      )
    "
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'

// compiler
const { variant = undefined } = defineProps<{
  variant?: 'highlight' /* | 'invitation' */
}>()
</script>
