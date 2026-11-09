<script lang="ts" setup>
import type { ToasterProps } from 'vue-sonner'
import { Toaster as Sonner } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-2xl',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton:
          'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton:
          'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        success:
          'group-[.toaster]:!bg-(--semantic-success-weak) group-[.toaster]:!text-(--semantic-base-text-primary) group-[.toaster]:!border-(--semantic-success-weak)',
        error:
          'group-[.toaster]:!bg-(--semantic-critic-weak) group-[.toaster]:!text-(--semantic-base-text-primary) group-[.toaster]:!border-(--semantic-critic-weak)',
      },
    }"
  />
</template>
