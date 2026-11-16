<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
  // the server moves a signed-in session onto its account's language by redirecting, and the browser drops a launched file at a redirect, so only the client may render this page
  ssr: false,
})

// the manifest's `file_handlers` open calendar files here, and the launch queue keeps the file for the create page, as the document stays the same within the app
const localePath = useLocalePath()
await navigateTo(localePath({ name: 'event-create' }), { replace: true })
</script>
