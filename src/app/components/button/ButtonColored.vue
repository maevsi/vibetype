<template>
  <Button
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center rounded-md px-4 py-2 font-medium',
        isPrimary
          ? 'text-text-bright dark:text-text-dark bg-gradient-to-tr from-blue-500 to-blue-600 dark:from-blue-300 dark:to-blue-400'
          : 'text-text-dark dark:text-text-bright border border-gray-300 hover:bg-black/5 dark:border-gray-600 dark:hover:bg-black/30',
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
  isPrimary = true,
  to,
  type = 'button',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
    isExternal?: boolean
    isPrimary?: boolean
    to?: RouteLocationRaw
    type?: ButtonHTMLAttributes['type']
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
