<template>
  <AppLink
    v-if="to"
    v-bind="delegatedProps"
    :aria-busy="loading"
    :aria-label
    :class="cn(classComputed, classProps)"
    :is-colored="false"
    :is-disabled="disabled || loading"
    :to
    @click="
      (event: MouseEvent) => {
        if (disabled || loading) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        emit('click', event)
      }
    "
  >
    <template v-if="loading">
      <AppButtonSpinner />
      <slot name="loading">{{ t('globalLoading') }}</slot>
    </template>
    <template v-else>
      <slot name="prefix" />
      <!-- <div class="truncate-overflow"> -->
      <slot />
      <!-- </div> -->
      <slot name="suffix" />
    </template>
  </AppLink>
  <button
    v-else
    :aria-busy="loading"
    :aria-label
    :class="cn(['rounded-sm', classComputed], classProps)"
    :disabled="disabled || loading"
    :title="ariaLabel"
    :type
    @click="emit('click', $event)"
  >
    <template v-if="loading">
      <AppButtonSpinner />
      <slot name="loading">{{ t('globalLoading') }}</slot>
    </template>
    <template v-else>
      <slot name="prefix" />
      <!-- <span class="truncate-overflow"> -->
      <slot />
      <!-- </span> -->
      <slot name="suffix" />
    </template>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { cn } from '@/utils/shadcn'

const {
  ariaLabel,
  class: classProps = undefined,
  disabled,
  isBlock,
  isExternal,
  isLinkColored,
  loading,
  to = undefined,
  type = 'button',
} = defineProps<
  {
    ariaLabel: string
    disabled?: boolean
    isBlock?: boolean
    isExternal?: boolean
    isLinkColored?: boolean
    loading?: boolean
    to?: RouteLocationRaw
    type?: ButtonHTMLAttributes['type']
  } & { class?: HtmlHTMLAttributes['class'] }
>()
const delegatedProps = computed(() => ({
  ariaLabel,
  isExternal,
}))

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { t } = useI18n()

// computations
const classComputed = computed(() =>
  [
    'overflow-hidden',
    ...(isBlock ? ['block'] : ['inline-flex items-center gap-2']),
    ...(isLinkColored ? ['text-link-dark dark:text-link-bright'] : []),
  ].join(' '),
)
</script>
