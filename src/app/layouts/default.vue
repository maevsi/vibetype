<template>
  <div class="flex flex-1">
    <LayoutMenuSidebar class="max-lg:hidden" />
    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="container flex flex-1 flex-col gap-4 self-center overflow-hidden p-4 md:px-8 2xl:gap-8"
      >
        <LayoutHeader />
        <main>
          <slot />
        </main>
      </div>
      <LayoutMenuBottomNavigation class="lg:hidden" />
    </div>
  </div>
</template>
