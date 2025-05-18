<template>
  <div class="flex flex-col items-center gap-2">
    <span>{{ callToActionDescription }}</span>
    <ButtonColored
      :aria-label="callToAction"
      :to="
        localePath({
          name: 'session-create',
          query: {
            to: route.fullPath,
          },
        })
      "
    >
      {{ callToAction }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
const { callToAction, callToActionDescription } = defineProps<{
  callToAction: string
  callToActionDescription: string
}>()

const localePath = useLocalePath()
const route = useRoute()
</script>
