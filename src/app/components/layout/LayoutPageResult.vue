<template>
  <TypographyH3 class="text-center">
    <slot name="title" />
  </TypographyH3>
  <div class="flex justify-center">
    <IVibetypeStateError
      v-if="type === 'error'"
      class="size-12 text-(--semantic-error-strong)"
    />
    <IVibetypeStateSuccess
      v-else-if="type === 'success'"
      class="size-12 text-(--semantic-success-strong)"
    />
    <IVibetypeStateWarning
      v-else-if="type === 'warning'"
      class="size-12 text-(--semantic-warning-strong)"
    />
    <IHeroiconsBugAnt v-else class="size-12 text-(--semantic-error-strong)" />
  </div>
  <TypographySubtitleLarge class="text-center">
    <slot name="description" />
  </TypographySubtitleLarge>
</template>

<script setup lang="ts">
const { type } = defineProps<{ type: 'error' | 'success' | 'warning' }>()
</script>
