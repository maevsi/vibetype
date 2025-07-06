<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

throw createError({
  fatal: true,
  statusCode: 418,
})
</script>
