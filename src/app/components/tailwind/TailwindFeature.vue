<template>
  <div
    class="flex flex-col justify-center gap-8 overflow-hidden lg:flex-row lg:gap-16"
  >
    <div class="flex justify-center text-7xl lg:mt-8">
      <slot />
    </div>
    <div class="flex-1">
      <h2
        class="text-base leading-7 font-semibold text-(--semantic-accent-text)"
      >
        {{ keyword }}
      </h2>
      <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {{ title }}
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { description, keyword, title } = defineProps<{
  description: string
  keyword: string
  title: string
}>()
</script>
