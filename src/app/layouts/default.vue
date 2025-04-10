<template>
  <div class="flex min-h-screen lg:h-screen 2xl:h-auto">
    <LayoutMenuSidebar class="hidden lg:block 2xl:hidden" />
    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="container mx-auto flex flex-1 shrink flex-col p-4 md:px-8 lg:block lg:overflow-y-auto"
      >
        <div class="flex-1 2xl:pb-32">
          <LayoutHeader />
          <main class="flex-1 overflow-hidden p-1">
            <slot />
          </main>
        </div>
      </div>
      <LayoutMenuBottomNavigation class="lg:hidden" />
    </div>
  </div>
</template>
