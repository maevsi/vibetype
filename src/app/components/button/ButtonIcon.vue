<template>
  <AppButton
    v-bind="delegatedProps"
    :class="
      cn(
        'justify-center',
        isRound && 'size-12 rounded-large bg-surface-raised',
        classProps,
      )
    "
    @click="emit('click')"
  >
    <slot />
  </AppButton>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  ariaLabel,
  class: classProps = undefined,
  disabled,
  isRound,
  to = undefined,
  type = 'button',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
    isRound?: boolean
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
