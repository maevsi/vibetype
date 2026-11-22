<template>
  <AppError v-if="error" :error />
  <div v-else class="flex flex-1 flex-col">
    <LayoutTopBar />
    <LayoutPage>
      <AppContentPage v-model:error="error" path="imprint" />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { AppErrorInput } from '~~/shared/utils/error'

// External links to this page:
// - Facebook (page info)
// - Instagram (profile links)
// - vibetype.de (footer)

const error = ref<AppErrorInput>()
</script>
