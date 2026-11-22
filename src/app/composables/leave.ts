import { useEventListener } from '@vueuse/core'

/** Asks before leaving a page, or closing or reloading the tab, while it holds unsaved changes, which are lost otherwise. */
export const useLeaveConfirmation = (isDirty: MaybeRefOrGetter<boolean>) => {
  const { t } = useI18n({ useScope: 'global' })

  onBeforeRouteLeave(
    () => !toValue(isDirty) || window.confirm(t('globalLeaveConfirm')),
  )

  if (import.meta.client) {
    // browsers show their own text here and ignore any custom one
    useEventListener(window, 'beforeunload', (event) => {
      if (toValue(isDirty)) event.preventDefault()
    })
  }
}
