<template>
  <AppError v-if="error" :error />
  <AppContentPage v-else v-model:error="error" path="privacy" />
</template>

<script setup lang="ts">
import type { AppErrorInput } from '~~/shared/utils/error'

// External links to this page:
// - App Store Connect (app privacy)
// - Facebook (page info)
// - vibetype.de (footer)

const error = ref<AppErrorInput>()
</script>
