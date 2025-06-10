<template>
  <NuxtLink
    :aria-label="ariaLabel"
    :class="cn(classComputed, classProps)"
    :disabled="isDisabled"
    :external="isExternal"
    :target="targetComputed"
    :to="to"
    @click="emit('click')"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import type { NuxtLinkProps } from '#app'
import { cn } from '@/utils/shadcn'

const {
  ariaLabel = undefined,
  class: classProps = undefined,
  isDisabled,
  isColored = true,
  isExternal,
  isUnderlined,
  target = undefined,
  to,
} = defineProps<
  {
    ariaLabel?: string
    isDisabled?: boolean
    isColored?: boolean
    isExternal?: boolean
    isUnderlined?: boolean
    target?: NuxtLinkProps['target']
    to: RouteLocationRaw
  } & { class?: HtmlHTMLAttributes['class'] }
>()

const emit = defineEmits<{
  click: []
}>()

// computations
const classComputed = computed(() =>
  [
    'rounded',
    ...(isColored ? ['text-(--accent-strong) dark:text-link-bright'] : []),
    ...(isDisabled ? ['disabled'] : []),
    ...(isUnderlined ? ['underline'] : []),
  ].join(' '),
)
const targetComputed = computed(
  () =>
    target ||
    (to.toString().match(/^((ftp|http(s)?):\/\/|(mailto):)/)
      ? '_blank'
      : undefined),
)
</script>
