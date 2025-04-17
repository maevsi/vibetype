<template>
  <FormItem>
    <FormControl>
      <RadioGroupItem :value />
    </FormControl>
    <FormLabel>
      <TypographySubtitleSmall>
        <slot />
      </TypographySubtitleSmall>
    </FormLabel>
  </FormItem>
</template>

<script setup lang="ts">
const { value } = defineProps<{
  value: string
}>()
</script>
