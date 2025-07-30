<template>
  <div>
    <div class="absolute flex h-full w-full bg-white" />
    <div
      class="relative flex h-full w-full items-center justify-center text-gray-900"
      :style="`padding: ${padding}`"
    >
      <div class="mb-[100px] flex flex-row items-center justify-between">
        <div class="flex w-full flex-col">
          <div
            :style="`fontWeight: bold; marginBottom: 50px; fontSize: ${titleFontSize};`"
          >
            {{ title || 'No Title' }}
          </div>
          <span
            v-if="description"
            class="items-center"
            :style="`fontSize: ${descriptionFontSize}; lineHeight: ${+descriptionFontSize.replace('px', '') * 1.5}px; opacity: 0.8;`"
          >
            {{ description }}
          </span>
        </div>
      </div>
      <div class="absolute bottom-10 flex flex-row items-start text-left">
        <img src="/assets/static/logos/app_logo.svg" height="60" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

const {
  title = 'Og Image Template',
  description = 'Set a description to change me.',
  padding = '0 100px',
  titleFontSize = '75px',
  descriptionFontSize = '35px',
} = defineProps<{
  title?: string
  description?: string
  padding?: string
  titleFontSize?: string
  descriptionFontSize?: string
}>()
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>
