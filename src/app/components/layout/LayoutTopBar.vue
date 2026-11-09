<template>
  <div
    class="sticky top-0 z-10 flex h-16 items-center gap-3 bg-glass px-4 py-2 backdrop-blur-xl"
  >
    <div class="flex size-12 items-center justify-center">
      <slot v-if="$slots.back" name="back" />
      <div v-else class="size-6" />
    </div>
    <h1 class="flex-1 text-center">
      <TypographyH6>
        <slot />
      </TypographyH6>
    </h1>
    <div class="flex size-12 items-center justify-center">
      <slot v-if="$slots.close" name="close" />
      <div v-else class="size-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
// const { variant } = defineProps<{
//   variant:
//     | 'for-image-back'
//     | 'for-image'
//     | 'label-big'
//     | 'label-event'
//     | 'label-medium'
// }>()
</script>
