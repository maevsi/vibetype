import { useStore } from '@tanstack/vue-form'
import type { AnyFormApi } from '@tanstack/vue-form'
import { useEventListener } from '@vueuse/core'
import type { InjectionKey } from 'vue'

const isLeaveConfirmationOpen = ref(false)
let resolveLeaveConfirmation: ((isConfirmed: boolean) => void) | undefined

const settleLeaveConfirmation = (isConfirmed: boolean) => {
  resolveLeaveConfirmation?.(isConfirmed)
  resolveLeaveConfirmation = undefined
  isLeaveConfirmationOpen.value = false
}

// filled on the client only, as module state on the server would be shared between requests
const dirtyStates = shallowReactive(new Set<MaybeRefOrGetter<boolean>>())

// every guard of one navigation gets the same target object, so several dirty components on a page ask only once
const navigationsConfirmed = new WeakSet<object>()

/** Lets `useLeaveConfirmation` register unsaved changes with the drawer around it, which asks before closing as closing discards them. */
export const leaveConfirmationDrawerKey: InjectionKey<
  (isDirty: MaybeRefOrGetter<boolean>) => void
> = Symbol('leaveConfirmationDrawer')

/** Whether any mounted page or component holds unsaved changes registered through `useLeaveConfirmation`. */
export const useHasUnsavedChanges = () =>
  computed(() => [...dirtyStates].some((isDirty) => toValue(isDirty)))

/** State of the drawer that `useLeaveConfirmation` opens, to be rendered once by `FormLeaveDrawer`. */
export const useLeaveConfirmationDrawer = () => ({
  isOpen: isLeaveConfirmationOpen,
  settle: settleLeaveConfirmation,
})

/** Asks whether unsaved changes may be discarded, resolving to the answer. */
export const confirmLeave = () => {
  settleLeaveConfirmation(false)

  return new Promise<boolean>((resolve) => {
    resolveLeaveConfirmation = resolve
    isLeaveConfirmationOpen.value = true
  })
}

/** Asks before leaving a page, closing the drawer around it, or closing or reloading the tab, while it holds unsaved changes, which are lost otherwise. */
export const useLeaveConfirmation = (isDirty: MaybeRefOrGetter<boolean>) => {
  onBeforeRouteLeave(async (to) => {
    if (!toValue(isDirty) || navigationsConfirmed.has(to)) return true

    const isConfirmed = await confirmLeave()
    if (isConfirmed) navigationsConfirmed.add(to)

    return isConfirmed
  })

  inject(leaveConfirmationDrawerKey, undefined)?.(isDirty)

  if (import.meta.client) {
    dirtyStates.add(isDirty)
    onScopeDispose(() => dirtyStates.delete(isDirty))

    // browsers show their own text here and ignore any custom one
    useEventListener(window, 'beforeunload', (event) => {
      if (toValue(isDirty)) event.preventDefault()
    })
  }
}

/** `useLeaveConfirmation` for a form, whose values count as unsaved while they differ from its default values, so submit handlers pass the saved values to `form.reset` before navigating away. */
export const useFormLeaveConfirmation = (form: AnyFormApi) => {
  // the form's own `isDirty` stays set once a field was edited, even when the edit was undone, and selected ids may come back in another order
  const isChanged = useStore(form.store, (state) => {
    const valuesInitial = new Map(
      Object.entries(form.options.defaultValues ?? {}),
    )

    return Object.entries(state.values as Record<string, unknown>).some(
      ([key, value]) => {
        // `FormFieldCaptcha` fills in its token unasked right after load, which would otherwise ask before leaving any untouched form with a captcha
        if (key === 'captcha') return false

        const valueInitial = valuesInitial.get(key)

        return Array.isArray(value) && Array.isArray(valueInitial)
          ? value.length !== valueInitial.length ||
              value.some((item) => !valueInitial.includes(item))
          : value !== valueInitial
      },
    )
  })

  useLeaveConfirmation(isChanged)
}
