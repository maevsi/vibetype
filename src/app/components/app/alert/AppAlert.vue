<template>
  <div
    :class="
      cn(
        'overflow-x-hidden rounded-large p-4 text-center text-body',
        'data-[variant=error]:bg-danger-tint data-[variant=error]:text-fg-1',
        'data-[variant=info]:bg-info-tint data-[variant=info]:text-info',
        'data-[variant=success]:bg-success-tint data-[variant=success]:text-fg-1',
        'data-[variant=warning]:bg-warning-tint data-[variant=warning]:text-fg-1',
        classProps,
      )
    "
    data-slot="alert"
    :data-variant="variant"
    :role="variant === 'error' || variant === 'success' ? 'alert' : undefined"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

export type AppAlertVariant = 'error' | 'info' | 'success' | 'warning'

const { class: classProps = undefined, variant = 'info' } = defineProps<{
  class?: HTMLAttributes['class']
  variant?: AppAlertVariant
}>()
</script>
