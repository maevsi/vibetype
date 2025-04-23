<template>
  <AppButton
    v-bind="delegatedProps"
    :class="cn('px-4 py-2 font-medium whitespace-nowrap', classProps)"
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
  to,
  type = 'button',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
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
  to,
  type,
}))
</script>
