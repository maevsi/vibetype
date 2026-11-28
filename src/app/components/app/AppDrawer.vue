<template>
  <Drawer v-model:open="isOpen" :direction no-body-styles>
    <DrawerContent class="gap-4" :class="classProps">
      <DrawerHeader class="px-3 pt-4 pb-0">
        <DrawerTitle>
          <span class="text-heading-medium text-balance">
            <slot name="title" />
          </span>
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

const {
  class: classProps = undefined,
  direction = undefined,
  isWithoutHistoryEntry = false,
} = defineProps<{
  class?: HTMLAttributes['class']
  direction?: DrawerDirection
  // a drawer opened by a pending navigation must not touch history, as removing its entry on close navigates back and cancels the navigation it confirms
  isWithoutHistoryEntry?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const isOpen = defineModel<boolean>()

// unsaved changes
// closing unmounts the content, so forms inside register their unsaved changes here to be asked about first
const dirtyStates = new Set<MaybeRefOrGetter<boolean>>()
provide(leaveConfirmationDrawerKey, (isDirty) => {
  dirtyStates.add(isDirty)
  onScopeDispose(() => dirtyStates.delete(isDirty))
})
let isCloseConfirmed = false
let isReopening = false

// history
// an open drawer owns one history entry, so a back navigation closes it instead of leaving the page behind it
const id = useId()
const onPopState = () => {
  if (history.state?.drawer === id) return

  isOpen.value = false
}
const historyEntryAdd = () => {
  history.pushState({ ...history.state, drawer: id }, '')
  window.addEventListener('popstate', onPopState)
}
// resolves once the entry is gone, as the back navigation removing it would cancel a navigation that `close` listeners start before
const historyEntryRemove = () => {
  window.removeEventListener('popstate', onPopState)

  // only while the entry is still current, as a navigation away from the page must not be undone
  if (history.state?.drawer !== id) return Promise.resolve()

  return new Promise<void>((resolve) => {
    window.addEventListener('popstate', () => resolve(), { once: true })
    history.back()
  })
}

// lifecycle
watch(isOpen, async (newValue) => {
  if (isReopening) {
    isReopening = false
    return
  }

  if (newValue) {
    isCloseConfirmed = false
  } else if (
    !isCloseConfirmed &&
    [...dirtyStates].some((isDirty) => toValue(isDirty))
  ) {
    isReopening = true
    isOpen.value = true

    if (await confirmLeave()) {
      isCloseConfirmed = true
      isOpen.value = false
    } else if (!isWithoutHistoryEntry && history.state?.drawer !== id) {
      // a back navigation already removed the entry that the open drawer owns
      historyEntryAdd()
    }

    return
  }

  if (isWithoutHistoryEntry) {
    if (!newValue) emit('close')
    return
  }

  if (newValue) {
    historyEntryAdd()
  } else {
    await historyEntryRemove()
    emit('close')
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('popstate', onPopState)
})
</script>
