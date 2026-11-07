<template>
  <div />
</template>

<script setup lang="ts">
// the service worker serves this route's client only shell for failed navigations, which keep their own url, and `early404` would make the shell's precache request fail without a page here
const localePath = useLocalePath()
await navigateTo(localePath({ name: 'index' }), { replace: true })
</script>
