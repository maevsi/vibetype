<template>
  <AppButton
    :aria-label="title"
    :class="
      cn(
        'flex min-h-12 w-full items-center gap-4 rounded-medium p-2 text-start hover:bg-surface-raised/50',
        classProps,
      )
    "
    data-slot="menu-item"
    size="none"
    :to
    :variant="variant === 'critical' ? 'tertiary-critical' : 'ghost'"
  >
    <!-- the icon keeps the default foreground, as the dark error color reaches only 4.23:1 on the raised surface -->
    <span
      :class="
        cn(
          'flex size-10 shrink-0 items-center justify-center rounded-medium bg-surface-raised [&>svg]:size-5',
          tone ? toneClasses[tone] : 'text-fg-1',
        )
      "
    >
      <slot />
    </span>
    <span class="min-w-0 flex-1 text-body">{{ title }}</span>
    <slot v-if="$slots.suffix" name="suffix" />
    <AppIconChevronRight v-else-if="to" class="size-5 shrink-0 text-fg-2" />
  </AppButton>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  class: classProps = undefined,
  to = undefined,
  tone = undefined,
  variant = 'default',
} = defineProps<{
  class?: HTMLAttributes['class']
  title: string
  // an optional prop typed with all routes exceeds the union size Vue's prop types can represent (https://github.com/vuejs/core/issues/10514), so links take localized paths until that is fixed
  to?: string
  tone?: 'danger' | 'info' | 'success' | 'warning'
  variant?: 'critical' | 'default'
}>()

const toneClasses = {
  danger: 'text-error',
  info: 'text-info',
  success: 'text-link',
  warning: 'text-warning',
} as const

defineSlots<{
  default?: () => unknown
  suffix?: () => unknown
}>()
</script>
