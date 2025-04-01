<template>
  <Button
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center gap-2 rounded-xl px-6 py-3 font-bold',
        'data-[type=primary]:bg-(--accent-strong) data-[type=primary]:text-(--semantic-base-primary-button-text) data-[type=primary]:hover:bg-(--accent-strong-hover)',
        'data-[type=secondary]:bg-(--accent-weak) data-[type=secondary]:text-(--semantic-base-secondary-button-text) data-[type=secondary]:hover:bg-(--accent-weak-hover)',
        'data-[type=tertiary]:text-(--semantic-base-text-tertiary) data-[type=tertiary]:underline data-[type=tertiary]:hover:bg-(--semantic-base-surface-1) data-[type=tertiary]:hover:text-(--semantic-base-primary-button-text) dark:data-[type=tertiary]:text-(--semantic-base-surface-1) dark:data-[type=tertiary]:hover:text-(--semantic-base-text-tertiary)',
        classProps,
      )
    "
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
  to,
  type = 'button',
  variant = 'primary',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
    isExternal?: boolean
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
