<template>
  <AppButton
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center',
        'data-[size=large]:gap-2 data-[size=large]:rounded-xl data-[size=large]:px-6 data-[size=large]:py-3 data-[size=large]:font-bold',
        'data-[size=small]:gap-1 data-[size=small]:rounded-[4px] data-[size=small]:px-3 data-[size=small]:py-1 data-[size=small]:text-[11px] data-[size=small]:font-semibold',
        'data-[type=primary]:bg-action-primary data-[type=primary]:text-on-action-primary data-[type=primary]:hover:bg-action-primary-hover data-[type=primary]:focus-visible:ring-action-primary/50 data-[type=primary]:active:bg-action-primary-hover',
        'data-[type=primary-critical]:bg-action-danger data-[type=primary-critical]:text-white data-[type=primary-critical]:hover:bg-action-danger-hover data-[type=primary-critical]:focus-visible:ring-action-danger/50 data-[type=primary-critical]:active:bg-action-danger-hover',
        'data-[type=secondary]:bg-success-tint data-[type=secondary]:text-fg-1 data-[type=secondary]:hover:bg-success-tint data-[type=secondary]:focus-visible:ring-success-tint/50 data-[type=secondary]:active:bg-success-tint',
        'data-[type=secondary-critical]:border-2 data-[type=secondary-critical]:border-error data-[type=secondary-critical]:text-error data-[type=secondary-critical]:hover:bg-surface-raised data-[type=secondary-critical]:active:bg-surface-raised',
        'data-[type=tertiary]:text-fg-3 data-[type=tertiary]:underline data-[type=tertiary]:hover:bg-surface-raised data-[type=tertiary]:active:bg-surface-raised data-[type=tertiary]:data-[size=small]:no-underline',
        'data-[type=tertiary]:data-[size=small]:no-underline data-[type=tertiary-critical]:text-error data-[type=tertiary-critical]:underline data-[type=tertiary-critical]:hover:bg-surface-raised data-[type=tertiary-critical]:active:bg-surface-raised',
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
