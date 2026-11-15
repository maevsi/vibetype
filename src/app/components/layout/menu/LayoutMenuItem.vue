<template>
  <AppLink
    v-bind="delegatedProps"
    class="group rounded-medium text-fg-3 aria-[current=page]:bg-line aria-[current=page]:text-fg-1 lg:text-fg-1"
    :is-colored="false"
  >
    <div
      class="flex h-12 w-20 flex-col items-center justify-center gap-0.5 lg:h-auto lg:w-auto lg:flex-row lg:justify-start lg:gap-2 lg:px-4 lg:py-3"
    >
      <div class="shrink-0">
        <slot />
      </div>
      <span class="max-w-full truncate text-caption lg:text-body">
        {{ title }}
      </span>
    </div>
  </AppLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { title, to } = defineProps<{
  title: string
  to: RouteLocationRaw
}>()

const delegatedProps = computed(() => ({
  to,
}))
</script>
