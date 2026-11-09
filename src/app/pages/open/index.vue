<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

// the manifest's `protocol_handlers` open `web+vibetype:` links here, e.g. `web+vibetype://event/view/username/slug`
const route = useRoute()
const url = typeof route.query.url === 'string' ? route.query.url : ''

// keeping only the path, behind a single slash, stops the link from leaving the app, like `web+vibetype:////example.com` would as `//example.com`; browsers drop tabs and line breaks anywhere in a url and leading control characters and spaces, so those can't separate the slashes either
const path = `/${url
  .replace(/[\t\n\r]/g, '')
  .replace(/^web\+vibetype:/i, '')
  // eslint-disable-next-line no-control-regex
  .replace(/^[\u0000- /\\]+/, '')}`

await navigateTo(path, { replace: true })
</script>
