<template>
  <div>
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
