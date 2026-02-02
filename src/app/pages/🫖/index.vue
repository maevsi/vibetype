<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

throw createError({
  fatal: true,
  status: 418,
})
</script>
