<template>
  <!-- the menu's pages have no back button, as the menu leads away from them -->
  <div
    v-if="isMenuRoute"
    class="flex w-full max-w-2xl items-center gap-3 self-center px-4 pt-6 empty:hidden"
  >
    <h1 v-if="$slots.default" class="m-0 flex-1 text-heading-large">
      <slot />
    </h1>
    <slot name="close" />
  </div>
  <div
    v-else
    class="sticky top-0 z-10 flex h-16 items-center gap-3 bg-glass px-4 py-2 backdrop-blur-xl"
  >
    <div class="flex size-12 items-center justify-center">
      <slot name="back">
        <ButtonIconBackRoute />
      </slot>
    </div>
    <h1 v-if="$slots.default" class="m-0 flex-1 text-center">
      <span class="text-title3 text-balance">
        <slot />
      </span>
    </h1>
    <div v-else class="flex-1" />
    <div class="flex h-12 min-w-12 items-center justify-center">
      <slot name="close" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuRoute = useIsMenuRoute()
</script>
