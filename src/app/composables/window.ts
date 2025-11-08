import { useClipboard, useWindowScroll } from '@vueuse/core'

export const useInfiniteScroll = ({
  loadMore,
  canLoadMore,
}: {
  loadMore: () => void
  canLoadMore: ComputedRef<boolean>
}) => {
  const { arrivedState } = useWindowScroll({ offset: { bottom: 500 }, window })

  watch(arrivedState, (current) => {
    if (!current.bottom || !canLoadMore.value) return

    loadMore()
  })
}

export const useCopy = () => {
  const { copy: clipboardCopy, isSupported } = useClipboard()
  const { t } = useI18n({ useScope: 'global' })
  const alertError = useAlertError()

  const copy = async (text: string) => {
    if (!import.meta.client) return

    if (!isSupported) {
      alertError(t('globalErrorClipboard'))
      return
    }

    await clipboardCopy(text)
  }

  return { copy }
}
