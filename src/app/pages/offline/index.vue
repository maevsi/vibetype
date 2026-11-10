<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
  ssr: false, // a user agnostic client app shell that the service worker serves for navigations when the network fails
})

// the service worker serves this route's client only shell for failed navigations, which keep their own url, and `early404` would make the shell's precache request fail without a page here
const localePath = useLocalePath()
await navigateTo(localePath({ name: 'index' }), { replace: true })
</script>
