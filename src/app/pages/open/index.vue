<template>
  <div />
</template>

<script setup lang="ts">
// the manifest's `protocol_handlers` open `web+vibetype:` links here, e.g. `web+vibetype://event/view/username/slug`
const route = useRoute()
const url = typeof route.query.url === 'string' ? route.query.url : ''

// keeping only the path, behind a single slash, stops the link from leaving the app, like `web+vibetype:////example.com` would as `//example.com`
const path = `/${url.replace(/^web\+vibetype:/i, '').replace(/^[/\\]+/, '')}`

await navigateTo(path, { replace: true })
</script>
