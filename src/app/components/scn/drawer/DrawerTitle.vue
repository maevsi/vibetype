<script lang="ts" setup>
import type { DrawerTitleProps } from 'vaul-vue'
import { cn } from '@/utils/shadcn'
import { DrawerTitle } from 'vaul-vue'
import { computed } from 'vue'
import type { HtmlHTMLAttributes } from 'vue'

const props = defineProps<
  DrawerTitleProps & { class?: HtmlHTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerTitle
    v-bind="delegatedProps"
    :class="cn('text-foreground font-semibold', props.class)"
    data-slot="drawer-title"
  >
    <slot />
  </DrawerTitle>
</template>
