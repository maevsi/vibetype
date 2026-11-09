<template>
  <AppLink
    v-bind="delegatedProps"
    class="group rounded-xl text-fg-2 aria-[current=page]:bg-line aria-[current=page]:text-fg-1 lg:text-fg-1"
    :is-colored="false"
  >
    <div class="mx-4.5 my-3 flex items-center gap-1.5">
      <div class="shrink-0">
        <slot />
      </div>
      <TypographySubtitleSmall
        class="truncate group-aria-[current=page]:block max-lg:hidden"
      >
        {{ title }}
      </TypographySubtitleSmall>
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
