<template>
  <AppLink
    v-bind="delegatedProps"
    class="group flex-1 rounded-(--default-border-radius) text-(--figma-neutral-level-5) aria-[current=page]:text-(--figma-primary-green-middle-dark)"
    :is-colored="false"
  >
    <div
      class="-mx-2 flex justify-center rounded-(--default-border-radius) px-4 py-1 group-aria-[current=page]:bg-(--figma-neutral-level-2)"
    >
      <div
        class="inline-flex size-10 flex-col items-center justify-center gap-0.5 lg:flex-row lg:gap-1.5"
      >
        <div class="shrink-0">
          <slot class="size-5" />
        </div>
        <AppTypographyCaption2 class="truncate" variant="emphasized">
          {{ title }}
        </AppTypographyCaption2>
      </div>
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
