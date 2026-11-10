<template>
  <AppButton
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center gap-4 rounded-medium text-body transition-transform active:scale-[0.97]',
        'data-[size=large]:h-13 data-[size=large]:px-6',
        'data-[size=small]:h-10 data-[size=small]:px-6',
        'data-[type=primary]:bg-action-primary data-[type=primary]:text-on-action-primary data-[type=primary]:hover:bg-action-primary-hover',
        'data-[type=primary-critical]:rounded-[12px] data-[type=primary-critical]:bg-action-warning data-[type=primary-critical]:text-on-action-warning data-[type=primary-critical]:hover:brightness-95',
        'data-[type=secondary]:bg-surface-raised data-[type=secondary]:text-fg-1 data-[type=secondary]:hover:bg-line',
        'data-[type=secondary-critical]:bg-surface-raised data-[type=secondary-critical]:text-error data-[type=secondary-critical]:hover:bg-line',
        'data-[type=tertiary]:text-link data-[type=tertiary]:hover:text-link-hover',
        'data-[type=tertiary-critical]:text-error',
        classProps,
      )
    "
    :data-size="size"
    :data-type="variant"
    @click="emit('click')"
  >
    <slot />
    <template #prefix>
      <slot name="prefix" />
    </template>
    <template #suffix>
      <slot name="suffix" />
    </template>
    <template v-if="$slots.loading" #loading>
      <slot name="loading" />
    </template>
  </AppButton>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

export type ButtonColoredProps = {
  ariaLabel: string
  disabled?: boolean
  isExternal?: boolean
  loading?: boolean
  size?: 'large' | 'small'
  to?: RouteLocationRaw
  type?: ButtonHTMLAttributes['type']
  variant?:
    | 'primary'
    | 'primary-critical'
    | 'secondary'
    | 'secondary-critical'
    | 'tertiary'
    | 'tertiary-critical'
} & { class?: HtmlHTMLAttributes['class'] }
const {
  ariaLabel,
  class: classProps = undefined,
  disabled,
  isExternal,
  loading,
  size = 'large',
  to = undefined,
  type = 'button',
  variant = 'primary',
} = defineProps<ButtonColoredProps>()

const emit = defineEmits<{
  click: []
}>()

const delegatedProps = computed(() => ({
  ariaLabel,
  disabled,
  isExternal,
  loading,
  to,
  type,
}))
</script>
