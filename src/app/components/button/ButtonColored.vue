<template>
  <AppButton
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center',
        'data-[size=large]:gap-2 data-[size=large]:rounded-(--default-border-radius) data-[size=large]:px-6 data-[size=large]:py-4 data-[size=large]:font-bold',
        'data-[size=small]:gap-1 data-[size=small]:rounded-lg data-[size=small]:px-3 data-[size=small]:py-1 data-[size=small]:text-[11px] data-[size=small]:font-semibold',
        'data-[type=primary]:bg-(--figma-primary-green-middle-dark) data-[type=primary]:text-(--figma-base-white) data-[type=primary]:hover:bg-(--figma-primary-green-dark) data-[type=primary]:focus-visible:ring-(--figma-primary-green-middle-dark)/50 data-[type=primary]:active:bg-(--figma-primary-green-dark)',
        'data-[type=primary-critical]:bg-(--semantic-critic-strong) data-[type=primary-critical]:text-(--base-white) data-[type=primary-critical]:hover:bg-(--semantic-critic-strong-hover) data-[type=primary-critical]:focus-visible:ring-(--semantic-critic-strong)/50 data-[type=primary-critical]:active:bg-(--semantic-critic-strong-hover)',
        'data-[type=secondary]:bg-(--neutral-level-1) data-[type=secondary]:text-(--semantic-base-text-primary) data-[type=secondary]:hover:bg-(--surface-active-hover) data-[type=secondary]:focus-visible:ring-(--neutral-level-5)/30 data-[type=secondary]:active:bg-(--surface-active)',
        'data-[type=secondary-critical]:border-2 data-[type=secondary-critical]:border-(--semantic-critic-text) data-[type=secondary-critical]:text-(--semantic-critic-text) data-[type=secondary-critical]:hover:bg-(--semantic-base-surface-1) data-[type=secondary-critical]:active:bg-(--semantic-base-surface-1)',
        'data-[type=tertiary]:text-(--semantic-base-text-tertiary) data-[type=tertiary]:underline data-[type=tertiary]:hover:bg-(--semantic-base-surface-1) data-[type=tertiary]:active:bg-(--semantic-base-surface-1) data-[type=tertiary]:data-[size=small]:no-underline',
        'data-[type=tertiary]:data-[size=small]:no-underline data-[type=tertiary-critical]:text-(--semantic-critic-text) data-[type=tertiary-critical]:underline data-[type=tertiary-critical]:hover:bg-(--semantic-base-surface-1) data-[type=tertiary-critical]:active:bg-(--semantic-base-surface-1)',
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
