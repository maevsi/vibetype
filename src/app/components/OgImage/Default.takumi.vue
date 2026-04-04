<template>
  <div
    class="flex flex-col bg-white px-16 py-8 text-gray-900"
    style="font-family: Raleway, sans-serif"
  >
    <div class="flex flex-1 items-center">
      <div class="flex flex-col gap-32">
        <span class="text-7xl font-bold" :style="titleLineClamp">
          {{ title }}
        </span>
        <span
          v-if="description"
          class="items-center gap-2 text-4xl"
          :style="descriptionLineClamp"
        >
          {{ description }}
        </span>
      </div>
    </div>
    <div class="flex justify-center">
      <img src="/assets/static/logos/app_logo.svg" height="60" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

const { title, description = undefined } = defineProps<{
  title: string
  description?: string
}>()

const lineClampStyle: (value: string, maxLines: number) => StyleValue = (
  value: string,
  maxLines: number,
) => {
  if (!value)
    return {
      display: 'flex',
      'text-overflow': 'ellipsis',
    }

  const wordCount = value.trim().split(/\s+/).length
  return {
    display: 'flex',
    'line-clamp': Math.min(wordCount, maxLines),
    'text-overflow': 'ellipsis',
  }
}

const descriptionLineClamp = description
  ? lineClampStyle(description, 3)
  : undefined
const titleLineClamp = lineClampStyle(title, 1)
</script>
