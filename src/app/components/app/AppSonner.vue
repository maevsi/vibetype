<template>
  <!-- TODO: confirm design -->
  <Toaster
    class="toaster group pointer-events-auto"
    rich-colors
    :theme="colorModePreference"
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
          'group-[.toaster]:!bg-success-tint group-[.toaster]:!text-fg-1 group-[.toaster]:!border-success-tint',
        error:
          'group-[.toaster]:!bg-danger-tint group-[.toaster]:!text-fg-1 group-[.toaster]:!border-danger-tint',
      },
    }"
  />
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner'

import type { ColorMode } from '~/types/color-mode'

const colorMode = useColorMode()

const colorModePreference = colorMode.preference as ColorMode
</script>

<style>
@import url('vue-sonner/style.css');
</style>
