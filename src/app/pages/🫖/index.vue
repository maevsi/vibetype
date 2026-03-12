<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

const { createA11yError } = useA11yError()
throw createA11yError({
  status: 418,
})
</script>
