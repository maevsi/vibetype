<template>
  <div
    class="relative isolate flex items-center gap-16 bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)] px-16 py-8"
    style="font-family: 'Raleway Variable', sans-serif"
  >
    <img
      alt=""
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
      height="1000"
      src="/assets/static/logos/app_icon.svg"
      width="1000"
    />
    <img
      v-if="image"
      alt="Profile picture."
      class="rounded-full border-8 border-white object-cover"
      height="360"
      :src="image"
      width="360"
    />
    <span class="flex flex-col justify-center gap-16">
      <span class="text-7xl font-bold" :style="usernameLineClamp">
        {{ `@${username}` }}
      </span>
      <div
        v-if="description"
        class="text-4xl text-gray-600"
        :style="descriptionLineClamp"
      >
        {{ description }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

const {
  description = undefined,
  image = undefined,
  username,
} = defineProps<{
  description?: string
  image?: string
  username: string
}>()

const lineClampStyle: (value: string, maxLines: number) => StyleValue = (
  value: string,
  maxLines: number,
) => {
  if (!value)
    return {
      display: 'block',
      'text-overflow': 'ellipsis',
    }

  const wordCount = value.trim().split(/\s+/).length
  return {
    display: 'block',
    'line-clamp': Math.min(wordCount, maxLines),
    'text-overflow': 'ellipsis',
  }
}

const descriptionLineClamp = description
  ? lineClampStyle(description, 3)
  : undefined
const usernameLineClamp = lineClampStyle(username, 1)
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>
