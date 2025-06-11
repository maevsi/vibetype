<template>
  <div class="m-auto inline-flex gap-4">
    <div
      v-for="(step, index) in steps"
      :key="step"
      class="flex items-center gap-2"
    >
      <div
        class="border-background-darken dark:border-background-brighten flex size-8 items-center justify-center rounded-full border font-bold"
        :class="{
          'bg-background-darken text-text-bright dark:bg-background-brighten dark:text-text-dark':
            step === active,
        }"
      >
        {{ index + 1 }}
      </div>
      <span>
        {{ step }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { active = undefined, steps = undefined } = defineProps<{
  active?: string
  steps?: Array<string>
}>()
</script>
