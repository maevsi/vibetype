<template>
  <!-- TODO: confirm design -->
  <Toaster
    class="pointer-events-auto"
    rich-colors
    :theme="colorModePreference"
  />
</template>

<script setup lang="ts">
import type { ColorMode } from '~/types/color-mode'

const colorMode = useColorMode()

const colorModePreference = colorMode.preference as ColorMode
</script>

<style>
@import url('vue-sonner/style.css');
</style>
