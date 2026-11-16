<template>
  <div />
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
  // this page redirects itself, and the browser drops a launched file at a server redirect, so only the client may render it
  ssr: false,
})

// the manifest's `file_handlers` open calendar files here, and the launch queue keeps the file for the create page, as the document stays the same within the app
// an installed app keeps the manifest it was installed with, so the launch url's locale can differ from the account's language, which `app.vue` has already stored in the cookie
const { $i18n } = useNuxtApp()
const localePath = useLocalePath()
await navigateTo(
  localePath(
    { name: 'event-create' },
    ($i18n.getLocaleCookie() ?? $i18n.locale.value) as LOCALE_CODES,
  ),
  { replace: true },
)
</script>
