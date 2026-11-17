<template>
  <AppError v-if="error" :error />
  <div v-else class="flex flex-1 flex-col">
    <LayoutTopBar />
    <LayoutPage>
      <AppContentPage v-model:error="error" path="conduct" />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { AppErrorInput } from '~~/shared/utils/error'

const error = ref<AppErrorInput>()
</script>
