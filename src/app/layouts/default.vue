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
</script>
