<template>
  <component
    :is="to ? AppLink : 'button'"
    v-bind="to ? linkAttributes : buttonAttributes"
    :aria-busy="loading || undefined"
    :aria-label
    :class="
      cn(
        'inline-flex items-center gap-2 overflow-hidden rounded-small',
        'data-[size=large]:h-13 data-[size=large]:justify-center data-[size=large]:gap-4 data-[size=large]:rounded-medium data-[size=large]:px-6 data-[size=large]:text-body data-[size=large]:transition-transform data-[size=large]:active:scale-[0.97]',
        'data-[size=small]:h-10 data-[size=small]:justify-center data-[size=small]:gap-4 data-[size=small]:rounded-medium data-[size=small]:px-6 data-[size=small]:text-body data-[size=small]:transition-transform data-[size=small]:active:scale-[0.97]',
        'data-[size=icon]:size-12 data-[size=icon]:justify-center data-[size=icon]:rounded-large',
        'data-[variant=primary]:bg-action-primary data-[variant=primary]:text-on-action-primary data-[variant=primary]:hover:bg-action-primary-hover',
        // the doubled attribute selector outranks the size's radius, which has the same specificity otherwise
        'data-[variant=primary-critical]:bg-action-warning data-[variant=primary-critical]:text-on-action-warning data-[variant=primary-critical]:hover:brightness-95 data-[variant=primary-critical]:data-[size]:rounded-[12px]',
        'data-[variant=secondary]:bg-surface-raised data-[variant=secondary]:text-fg-1 data-[variant=secondary]:hover:bg-line',
        'data-[variant=secondary-critical]:bg-surface-raised data-[variant=secondary-critical]:text-error data-[variant=secondary-critical]:hover:bg-line',
        'data-[variant=tertiary]:text-link data-[variant=tertiary]:hover:text-link-hover',
        'data-[variant=tertiary-critical]:text-error',
        classProps,
      )
    "
    :data-size="size"
    data-slot="button"
    :data-variant="variant"
    :title="ariaLabel"
  >
    <template v-if="loading">
      <AppSpinner aria-hidden="true" />
      <slot name="loading">{{ t('globalLoading') }}</slot>
    </template>
    <template v-else>
      <slot name="prefix" />
      <slot />
      <slot name="suffix" />
    </template>
  </component>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { AppLink } from '#components'
import { cn } from '@/utils/shadcn'

export type AppButtonSize = 'icon' | 'large' | 'none' | 'small'
export type AppButtonVariant =
  | 'ghost'
  | 'primary'
  | 'primary-critical'
  | 'secondary'
  | 'secondary-critical'
  | 'tertiary'
  | 'tertiary-critical'

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
} = defineProps<{
  ariaLabel: string
  class?: HTMLAttributes['class']
  disabled?: boolean
  isExternal?: boolean
  loading?: boolean
  size?: AppButtonSize
  to?: RouteLocationRaw
  type?: ButtonHTMLAttributes['type']
  variant?: AppButtonVariant
}>()

defineSlots<{
  default?: () => unknown
  loading?: () => unknown
  prefix?: () => unknown
  suffix?: () => unknown
}>()

const { t } = useI18n()

const isDisabled = computed(() => disabled || loading)

// a link cannot be disabled natively, so it is taken out of the tab order and `AppLink` blocks its clicks
const linkAttributes = computed(() => ({
  'aria-disabled': isDisabled.value || undefined,
  isColored: false,
  isDisabled: isDisabled.value,
  isExternal,
  tabindex: isDisabled.value ? -1 : undefined,
  to,
}))
const buttonAttributes = computed(() => ({
  disabled: isDisabled.value,
  type,
}))
</script>
