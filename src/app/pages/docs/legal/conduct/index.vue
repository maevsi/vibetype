<template>
  <AppError v-if="error" :error />
  <AppContentPage v-else v-model:error="error" path="conduct" />
</template>

<script setup lang="ts">
import type { AppErrorInput } from '~~/shared/utils/error'

const error = ref<AppErrorInput>()
</script>
