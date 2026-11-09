<template>
  <Drawer v-model:open="isOpen" :direction no-body-styles>
    <DrawerContent class="gap-4" :class="classProps">
      <DrawerHeader class="px-3 pt-4 pb-0">
        <DrawerTitle>
          <TypographyH3>
            <slot name="title" />
          </TypographyH3>
        </DrawerTitle>
        <DrawerDescription class="sr-only">
          <slot name="description" />
        </DrawerDescription>
      </DrawerHeader>
      <div class="flex min-h-0 flex-1 flex-col overflow-y-auto px-3">
        <slot />
      </div>
      <DrawerFooter v-if="$slots.footer" class="gap-2 p-2">
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
