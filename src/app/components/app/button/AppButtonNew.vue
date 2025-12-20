<template>
  <AppButtonHeadless
    v-bind="delegatedProps"
    :data-variant="variant"
    :class="
      cn(
        'flex gap-3 rounded-3xl p-3',
        'data-[variant=primary]:bg-(--primary-green-middle-dark) data-[variant=secondary]:bg-(--neutral-level-1)',
        classProps,
      )
    "
    @click="emit('click')"
  >
    <slot name="prefix" />
    <AppTypographySubheadlineEmphasized>
      <slot />
    </AppTypographySubheadlineEmphasized>
  </AppButtonHeadless>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  ariaLabel,
  class: classProps = undefined,
  disabled,
  isExternal,
  to = undefined,
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
const delegatedProps = computed(() => ({
  ariaLabel,
  disabled,
  isExternal,
  to,
  type,
}))

const emit = defineEmits<{
  click: []
}>()
</script>
