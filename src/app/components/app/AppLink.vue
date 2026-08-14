<template>
  <NuxtLink
    :aria-label
    :class="cn(classComputed, classProps)"
    :disabled="isDisabled"
    :external="isExternal"
    :target="targetComputed"
    :to
    @click="onClick"
  >
    <slot />
    <ModalExternalLink
      v-if="isLeavingSite"
      v-model="isModalExternalLinkOpen"
      :url="to.toString()"
    />
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
  click: [event: MouseEvent]
}>()

// data
const isModalExternalLinkOpen = ref(false)

// computations
const classComputed = computed(() =>
  [
    'rounded',
    ...(isColored ? ['text-(--accent-strong) dark:text-link-bright'] : []),
    ...(isDisabled ? ['disabled'] : []),
    ...(isUnderlined ? ['underline'] : []),
  ].join(' '),
)
const isLeavingSite = computed(() => /^(ftp|http(s)?):\/\//.test(to.toString()))
const isMailto = computed(() => /^mailto:/.test(to.toString()))
const targetComputed = computed(
  () =>
    target || (isLeavingSite.value || isMailto.value ? '_blank' : undefined),
)

// methods
const onClick = (event: MouseEvent) => {
  if (isLeavingSite.value) {
    event.preventDefault()
    isModalExternalLinkOpen.value = true
  }

  emit('click', event)
}
</script>
