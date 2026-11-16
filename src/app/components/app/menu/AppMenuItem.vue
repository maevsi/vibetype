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
      class="flex size-10 shrink-0 items-center justify-center rounded-medium bg-surface-raised text-fg-1 [&>svg]:size-5"
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
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  class: classProps = undefined,
  to = undefined,
  variant = 'default',
} = defineProps<{
  class?: HTMLAttributes['class']
  title: string
  to?: RouteLocationRaw
  variant?: 'critical' | 'default'
}>()

defineSlots<{
  default?: () => unknown
  suffix?: () => unknown
}>()
</script>
