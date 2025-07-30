<template>
  <div
    class="flex h-full w-full flex-nowrap bg-[linear-gradient(to_bottom,_#dbf4ff,_#fff1f1)]"
  >
    <!-- <img
      alt="Event image."
      src="/assets/static/images/event.jpg"
      width="436"
      height="630"
    /> -->
    <span class="mx-16 flex flex-1 flex-col justify-center">
      <h1 class="truncate text-7xl">
        {{ title }}
      </h1>
      <div class="mt-16 text-3xl text-gray-600">
        {{ description }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
const { description, title } = defineProps<{
  description: string
  title: string
}>()
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>
