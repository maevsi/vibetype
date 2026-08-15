<template>
  <Drawer v-model:open="isOpen" :direction no-body-styles>
    <DrawerContent class="gap-4" :class="classProps">
      <DrawerHeader class="py-0">
        <DrawerTitle class="pb-2 text-center leading-7">
          <TypographyH6>
            <slot name="title" />
          </TypographyH6>
        </DrawerTitle>
        <DrawerDescription class="sr-only">
          <slot name="description" />
        </DrawerDescription>
        <AppHr />
      </DrawerHeader>
      <div class="flex min-h-0 flex-1 flex-col overflow-y-auto px-3">
        <slot />
      </div>
      <DrawerFooter v-if="$slots.footer" class="p-0 px-3 py-2">
        <slot name="footer" />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { DrawerDirection } from 'vaul-vue'

const { class: classProps = undefined, direction = undefined } = defineProps<{
  class?: HTMLAttributes['class']
  direction?: DrawerDirection
}>()

const emit = defineEmits<{
  close: []
}>()

const isOpen = defineModel<boolean>()

// lifecycle
watch(isOpen, (newValue) => {
  if (!newValue) {
    emit('close')
  }
})
</script>
