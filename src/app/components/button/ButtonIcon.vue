<template>
  <Button
    v-bind="delegatedProps"
    :class="cn('justify-center', classProps)"
    :title="ariaLabel"
    @click="emit('click')"
  >
    <slot />
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
