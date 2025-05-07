<template>
  <AppLink
    v-if="to"
    v-bind="delegatedProps"
    :aria-label="ariaLabel"
    :class="cn(classComputed, classProps)"
    :is-disabled="disabled"
    :is-colored="false"
    :to="to"
    @click="emit('click')"
  >
    <slot name="prefix" />
    <!-- <div class="truncate-overflow"> -->
    <slot />
    <!-- </div> -->
    <slot name="suffix" />
  </AppLink>
  <button
    v-else
    :aria-label="ariaLabel"
    :class="cn(['rounded-sm', classComputed], classProps)"
    :disabled="disabled"
    :title="ariaLabel"
    :type="type"
    @click="emit('click')"
  >
    <slot name="prefix" />
    <!-- <span class="truncate-overflow"> -->
    <slot />
    <!-- </span> -->
    <slot name="suffix" />
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  ariaLabel,
  class: classProps,
  disabled,
  isBlock,
  isExternal,
  isLinkColored,
  to,
  type = 'button',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
    isBlock?: boolean
    isExternal?: boolean
    isLinkColored?: boolean
    to?: RouteLocationRaw
    type?: ButtonHTMLAttributes['type']
  } & { class?: HtmlHTMLAttributes['class'] }
>()
const delegatedProps = computed(() => ({
  ariaLabel,
  isExternal,
}))

const emit = defineEmits<{
  click: []
}>()

// computations
const classComputed = computed(() =>
  [
    'overflow-hidden',
    ...(isBlock ? ['block'] : ['inline-flex items-center gap-2']),
    ...(isLinkColored ? ['text-link-dark dark:text-link-bright'] : []),
  ].join(' '),
)
</script>

<script lang="ts">
export default {
  name: 'AppButton',
}
</script>
