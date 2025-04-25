<template>
  <div class="flex flex-col gap-10">
    <TypographyH3 v-if="$slots.title" class="text-center">
      <slot name="title" />
    </TypographyH3>
    <div class="flex justify-center">
      <AppIconStateError
        v-if="type === 'error'"
        class="size-12 text-(--semantic-error-strong)"
      />
      <AppIconStateSuccess
        v-else-if="type === 'success'"
        class="size-12 text-(--semantic-success-strong)"
      />
      <AppIconStateWarning
        v-else-if="type === 'warning'"
        class="size-12 text-(--semantic-warning-strong)"
      />
      <IHeroiconsBugAnt v-else class="size-12 text-(--semantic-error-strong)" />
    </div>
    <div class="flex flex-col gap-8">
      <TypographySubtitleLarge class="text-center">
        <slot name="description" />
      </TypographySubtitleLarge>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { type } = defineProps<{ type: 'error' | 'success' | 'warning' }>()
</script>
