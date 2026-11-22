<template>
  <div class="flex flex-1 flex-col">
    <div
      class="flex w-full max-w-2xl flex-1 flex-col gap-10 self-center p-4"
      data-slot="page-content"
    >
      <slot />
    </div>
    <div v-if="$slots.bottom" class="sticky bottom-0 flex flex-col justify-end">
      <div
        class="flex flex-col items-center gap-2 bg-glass-raised p-4 backdrop-blur-xl"
      >
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
