<template>
  <AppError v-if="error" :error />
  <AppContentPage v-else v-model:error="error" path="imprint" />
</template>

<script setup lang="ts">
import type { AppErrorInput } from '~~/shared/utils/error'

// External links to this page:
// - Facebook (page info)
// - Instagram (profile links)
// - vibetype.de (footer)

const error = ref<AppErrorInput>()
</script>
