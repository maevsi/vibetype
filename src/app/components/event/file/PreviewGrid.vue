<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="(file, index) in files" :key="index" class="relative">
      <div
        class="rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-surface) p-2 pb-4 sm:p-4 sm:pb-6 md:rounded-2xl"
      >
        <div
          class="relative aspect-[4/3] w-full overflow-hidden rounded-md"
          :class="[
            modelValue === index
              ? 'border-2 border-(--accent-strong)'
              : 'border-2 border-(--semantic-base-line)',
          ]"
        >
          <img :src="previewUrls[index]" class="h-full w-full object-cover" />
        </div>
        <div
          class="mt-1 flex items-center justify-between px-1 sm:mt-2 sm:px-2"
        >
          <div
            class="flex h-6 w-6 items-center justify-center border bg-white sm:h-8 sm:w-8"
          >
            <input
              type="radio"
              name="cover"
              :value="index"
              :checked="modelValue === index"
              class="h-3.5 w-3.5 rounded-full border text-[#00A24C] focus:ring-0 sm:h-5 sm:w-5"
              @change="$emit('update:modelValue', index)"
            />
          </div>
          <div>
            <button class="p-1 sm:p-1.5" @click="$emit('remove', index)">
              <X class="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

defineProps<{
  files: File[]
  previewUrls: string[]
  modelValue: number
}>()

defineEmits<{
  'update:modelValue': [value: number]
  remove: [index: number]
}>()
</script>
