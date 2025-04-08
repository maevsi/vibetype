<template>
  <div class="flex-1 text-center">
    <TypographyH6 class="text-lg font-bold text-(--semantic-base-primary)">
      {{ title }}
    </TypographyH6>
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps<{
  title: string
}>()
</script>
