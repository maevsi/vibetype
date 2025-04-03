<template>
  <div
    class="sticky top-0 z-10 flex h-15 items-center border-b border-(--semantic-base-line) bg-(--semantic-base-background) px-3 py-1.5 shadow-xs"
  >
    <div class="flex p-3">
      <slot name="back" />
    </div>
    <TypographyH6 class="grow text-center">
      <slot />
    </TypographyH6>
    <div class="p-3">
      <div class="size-6" />
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
