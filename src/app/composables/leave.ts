import { useEventListener } from '@vueuse/core'

const isLeaveConfirmationOpen = ref(false)
let resolveLeaveConfirmation: ((isConfirmed: boolean) => void) | undefined

const settleLeaveConfirmation = (isConfirmed: boolean) => {
  resolveLeaveConfirmation?.(isConfirmed)
  resolveLeaveConfirmation = undefined
  isLeaveConfirmationOpen.value = false
}

/** State of the drawer that `useLeaveConfirmation` opens, to be rendered once by `FormLeaveDrawer`. */
export const useLeaveConfirmationDrawer = () => ({
  isOpen: isLeaveConfirmationOpen,
  settle: settleLeaveConfirmation,
})

/** Asks before leaving a page, or closing or reloading the tab, while it holds unsaved changes, which are lost otherwise. */
export const useLeaveConfirmation = (isDirty: MaybeRefOrGetter<boolean>) => {
  onBeforeRouteLeave(() => {
    if (!toValue(isDirty)) return true

    settleLeaveConfirmation(false)

    return new Promise<boolean>((resolve) => {
      resolveLeaveConfirmation = resolve
      isLeaveConfirmationOpen.value = true
    })
  })

  if (import.meta.client) {
    // browsers show their own text here and ignore any custom one
    useEventListener(window, 'beforeunload', (event) => {
      if (toValue(isDirty)) event.preventDefault()
    })
  }
}
