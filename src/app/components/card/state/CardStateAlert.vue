<template>
  <CardState
    :class="
      cn(
        'bg-(--semantic-critic-strong) text-(--semantic-base-light-text-on-dark)',
        classProps,
      )
    "
    role="alert"
  >
    <slot />
  </CardState>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
