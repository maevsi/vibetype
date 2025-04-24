<template>
  <AppButton
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center',
        'data-[size=large]:gap-2 data-[size=large]:rounded-xl data-[size=large]:px-6 data-[size=large]:py-3 data-[size=large]:font-bold',
        'data-[size=small]:gap-1 data-[size=small]:rounded-sm data-[size=small]:px-3 data-[size=small]:py-1 data-[size=small]:text-[11px] data-[size=small]:font-semibold',
        'data-[type=primary]:bg-(--accent-strong) data-[type=primary]:text-(--semantic-base-primary-button-text) data-[type=primary]:hover:bg-(--accent-strong-hover) data-[type=primary]:focus-visible:ring-(--accent-strong)/50 data-[type=primary]:active:bg-(--accent-strong-hover)',
        'data-[type=primary-critical]:bg-(--semantic-critic-strong) data-[type=primary-critical]:text-(--base-white) data-[type=primary-critical]:hover:bg-(--semantic-critic-strong-hover) data-[type=primary-critical]:focus-visible:ring-(--semantic-critic-strong)/50 data-[type=primary-critical]:active:bg-(--semantic-critic-strong-hover)',
        'data-[type=secondary]:bg-(--accent-weak) data-[type=secondary]:text-(--semantic-base-secondary-button-text) data-[type=secondary]:hover:bg-(--accent-weak-hover) data-[type=secondary]:focus-visible:ring-(--accent-weak)/50 data-[type=secondary]:active:bg-(--accent-weak-hover)',
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
  </AppButton>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  ariaLabel,
  class: classProps,
  disabled,
  isExternal,
  size = 'large',
  to,
  type = 'button',
  variant = 'primary',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
    isExternal?: boolean
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
>()

const emit = defineEmits<{
  click: []
}>()

const delegatedProps = computed(() => ({
  ariaLabel,
  disabled,
  isExternal,
  to,
  type,
}))
</script>
