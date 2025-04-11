<template>
  <div class="container flex flex-1 flex-col gap-10 self-center p-3">
    <slot />
    <div
      v-if="$slots['bottom-navigation-extension']"
      class="flex flex-1 flex-col justify-end"
    >
      <div
        class="absolute inset-x-0 bottom-0 flex justify-center border-t border-(--semantic-base-line) p-3"
      >
        <slot name="bottom-navigation-extension" />
      </div>
    </div>
  </div>
</template>
