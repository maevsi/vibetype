<template>
  <TypographyH6 v-if="variant === 'recommendation'">
    <slot />
  </TypographyH6>
  <span
    v-else
    :class="
      cn(
        'line-clamp-2 text-base leading-[20px] font-semibold tracking-[0.15%] wrap-break-word',
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
  variant?: 'highlight' /* | 'invitation' */ | 'recommendation'
}>()
</script>
