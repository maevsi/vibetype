import { useWindowScroll } from '@vueuse/core'

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
