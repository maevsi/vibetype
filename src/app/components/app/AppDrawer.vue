<template>
  <Drawer v-model:open="isOpen" no-body-styles>
    <DrawerContent class="gap-4">
      <DrawerHeader class="py-0">
        <DrawerTitle class="pb-2 text-center leading-7">
          <TypographyH6>
            <slot name="title" />
          </TypographyH6>
        </DrawerTitle>
        <AppHr />
      </DrawerHeader>
      <div class="px-3">
        <slot />
      </div>
      <DrawerFooter class="p-0 px-3 py-2">
        <slot name="footer" />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>()
</script>
