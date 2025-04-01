<template>
  <Button
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center rounded-md px-4 py-2 font-medium',
        variantClasses,
        classProps,
      )
    "
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
    variant?: 'primary' | 'secondary'
  } & { class?: HtmlHTMLAttributes['class'] }
>()

const emit = defineEmits<{
  click: []
}>()

const variantClasses = computed(() => {
  switch (variant) {
    case 'primary':
      return 'bg-(--accent-strong) font-bold text-(--semantic-base-primary-button-text) hover:bg-(--accent-strong-hover)'
    case 'secondary':
      return 'bg-(--accent-weak) font-bold text-(--semantic-base-secondary-button-text) hover:bg-(--accent-weak-hover) dark:bg-(--accent-strong) font-bold text-(--semantic-base-primary-button-text)'
    default:
      return 'bg-(--accent-strong) text-(--semantic-base-primary-button-text) hover:bg-(--accent-strong-hover)'
  }
})

const delegatedProps = computed(() => ({
  ariaLabel,
  disabled,
  isExternal,
  to,
  type,
}))
</script>
