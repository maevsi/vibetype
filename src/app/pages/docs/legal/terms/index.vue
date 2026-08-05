<template>
  <AppError v-if="error" :error="{ message: error.message, status: 500 }" />
  <ContentLegalTerms v-else v-model:error="error" />
</template>

<script setup lang="ts">
const error = ref<Error | undefined>()
</script>
