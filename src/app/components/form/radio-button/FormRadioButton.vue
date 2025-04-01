<template>
  <div>
    <input
      :id="`input-${groupName}-${titleSlug}`"
      :checked="checked"
      :name="groupName"
      type="radio"
      :value="value || titleSlug"
      @change="emit('change', ($event.target as HTMLInputElement).value)"
    />
    <label class="pl-2" :for="`input-${groupName}-${titleSlug}`">
      {{ title }}
    </label>
  </div>
</template>

<script setup lang="ts">
import slugify from 'slugify'

const { checked, groupName, title, value } = defineProps<{
  checked?: boolean
  groupName?: string
  title: string
  value: string
}>()

const emit = defineEmits<{
  change: [change: string]
}>()

// computations
const titleSlug = computed(() => {
  return slugify(title, { lower: true, strict: true })
})
</script>
