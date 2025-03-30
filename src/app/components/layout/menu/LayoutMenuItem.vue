<template>
  <AppLink
    v-bind="delegatedProps"
    class="group rounded-xl text-(--semantic-base-text-secondary) aria-[current=page]:bg-(--accent-weak) aria-[current=page]:text-(--semantic-accent-accent-text) lg:text-(--semantic-base-text-primary)"
    :is-colored="false"
  >
    <div class="mx-4.5 my-3 flex items-center gap-1.5">
      <slot />
      <TypographySubtitleSmall
        class="line-clamp-1 hidden group-aria-[current=page]:block lg:block"
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
