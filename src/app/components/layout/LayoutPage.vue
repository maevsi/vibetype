<template>
  <div class="flex flex-1 basis-0 flex-col overflow-y-auto">
    <div
      class="flex w-full max-w-md flex-1 flex-col gap-10 self-center p-3 lg:p-6"
    >
      <slot />
    </div>
    <div v-if="$slots.bottom" class="sticky bottom-0 flex flex-col justify-end">
      <div
        class="flex flex-col items-center gap-3 border-t border-(--semantic-base-line) bg-(--semantic-base-background) p-3"
      >
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
