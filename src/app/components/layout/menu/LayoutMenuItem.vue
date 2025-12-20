<template>
  <AppLink
    v-bind="delegatedProps"
    class="group rounded-2xl text-(--neutral-level-5) aria-[current=page]:bg-(--neutral-level-2) aria-[current=page]:text-(--primary-green-middle-dark)"
    :data-variant="variant"
    :is-colored="false"
  >
    <div
      class="flex flex-col items-center gap-0.5 px-4 py-1 lg:flex-row lg:gap-2 lg:py-4"
    >
      <slot class="size-5 lg:size-6" />
      <AppTypographyCaption2Emphasized
        class="truncate group-data-[variant=special]:max-lg:hidden lg:text-base"
      >
        {{ title }}
      </AppTypographyCaption2Emphasized>
    </div>
  </AppLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const {
  title,
  to,
  variant = undefined,
} = defineProps<{
  title: string
  to: RouteLocationRaw
  variant?: 'special'
}>()

const delegatedProps = computed(() => ({
  to,
}))
</script>
