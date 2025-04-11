<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

throw createError({
  statusCode: 418,
})
</script>
