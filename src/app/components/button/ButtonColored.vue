<template>
  <Button
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center',
        'data-[size=large]:gap-2 data-[size=large]:rounded-xl data-[size=large]:px-6 data-[size=large]:py-3 data-[size=large]:font-bold',
        'data-[size=small]:gap-1 data-[size=small]:rounded-sm data-[size=small]:px-3 data-[size=small]:py-1 data-[size=small]:text-[11px] data-[size=small]:font-semibold',
        'data-[type=primary]:bg-(--accent-strong) data-[type=primary]:text-(--semantic-base-primary-button-text) data-[type=primary]:hover:bg-(--accent-strong-hover)',
        'data-[type=secondary]:bg-(--accent-weak) data-[type=secondary]:text-(--semantic-base-secondary-button-text) data-[type=secondary]:hover:bg-(--accent-weak-hover)',
        'data-[type=tertiary]:text-(--semantic-base-text-tertiary) data-[type=tertiary]:underline data-[type=tertiary]:hover:bg-(--semantic-base-surface-1) data-[type=tertiary]:hover:text-(--semantic-base-primary-button-text) data-[type=tertiary]:data-[size=small]:no-underline dark:data-[type=tertiary]:text-(--semantic-base-surface-1) dark:data-[type=tertiary]:hover:text-(--semantic-base-text-tertiary)',
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
  </Button>
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
    variant?: 'primary' | 'secondary' | 'tertiary'
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
