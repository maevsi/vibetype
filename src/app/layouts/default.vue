<template>
  <div class="flex flex-1">
    <LayoutMenuSidebar class="max-lg:hidden" />
    <div class="flex min-w-0 flex-1 flex-col">
      <main class="flex flex-1 flex-col">
        <slot />
      </main>
      <LayoutMenuBottomNavigation v-if="isMenuRoute" class="lg:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuRoute = useIsMenuRoute()
const nuxtApp = useNuxtApp()
const route = useRoute()

// once the new page rendered, as a route watcher would focus the previous page's heading; a query change keeps the page, so only a path change moves focus
let path = route.path
onBeforeUnmount(
  nuxtApp.hook('page:finish', () => {
    if (route.path === path) return

    path = route.path
    focusHeading()
  }),
)
</script>
