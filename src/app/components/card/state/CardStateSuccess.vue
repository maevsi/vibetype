<template>
  <CardState
    :class="
      cn(
        'bg-(--accent-strong) text-(--semantic-base-primary-button-text)',
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
