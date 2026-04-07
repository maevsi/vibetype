<template>
  <FormField v-slot="{ value, handleChange }" :name="name" type="checkbox">
    <FormItem>
      <div class="flex gap-3">
        <FormControl class="mt-1">
          <AppCheckbox
            :model-value="value"
            required
            @update:model-value="handleChange"
          />
        </FormControl>
        <FormLabel>
          <TypographySubtitleSmall>
            <slot />
          </TypographySubtitleSmall>
        </FormLabel>
      </div>
      <TypographyLabel v-slot="attributes">
        <FormMessage v-bind="attributes" />
      </TypographyLabel>
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
