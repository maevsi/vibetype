<template>
  <div class="flex items-center gap-3 p-1">
    <RadioGroupItem :id="templateIdLabel" :value />
    <Label :for="templateIdLabel">
      <TypographySubtitleSmall>
        <slot />
      </TypographySubtitleSmall>
    </Label>
  </div>
</template>

<script setup lang="ts">
const { value } = defineProps<{
  value: string
}>()

const templateIdLabel = useId()
</script>
