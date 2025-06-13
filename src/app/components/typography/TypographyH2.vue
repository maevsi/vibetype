<template>
  <span
    :class="
      cn('text-3xl leading-[160%] font-extrabold tracking-[0.15%]', classProps)
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
