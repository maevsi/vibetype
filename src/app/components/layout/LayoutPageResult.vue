<template>
  <section
    :aria-labelledby="$slots.title ? templateIdTitle : undefined"
    class="flex flex-col gap-6"
  >
    <TypographyH3
      v-if="$slots.title"
      :id="templateIdTitle"
      class="text-center text-pretty"
    >
      <slot name="title" />
    </TypographyH3>
    <div
      class="flex size-14 items-center justify-center self-center rounded-medium bg-surface-raised"
    >
      <AppIconStateError v-if="type === 'error'" class="size-8 text-error" />
      <AppIconStateSuccess
        v-else-if="type === 'success'"
        class="size-8 text-link"
      />
      <AppIconStateWarning
        v-else-if="type === 'warning'"
        class="size-8 text-warning"
      />
      <AppIconBugAnt v-else class="size-8 text-error" />
    </div>
    <div class="flex flex-col gap-8">
      <TypographySubtitleLarge
        v-if="$slots.description"
        class="text-center text-pretty"
      >
        <slot name="description" />
      </TypographySubtitleLarge>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const { type } = defineProps<{ type: 'error' | 'success' | 'warning' }>()

// template
const templateIdTitle = useId()
</script>
