<template>
  <AppButton
    v-bind="delegatedProps"
    :class="cn('justify-center', classProps)"
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
  // @ts-expect-error TODO: wait for sitemap to support compact routes (https://github.com/nuxt-modules/sitemap/issues/617)
  ariaLabel,
  class: classProps = undefined,
  disabled,
  to = undefined,
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
