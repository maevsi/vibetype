import { useIntersectionObserver } from '@vueuse/core'
import type { WatchSource } from 'vue'

/**
 * Loads the pages of a connection one after another by moving `after` along the cursors.
 * The returned flag turns true once the last page arrived and stays so, as a refetch from the first page must not bring the loading state back.
 */
export const usePagesAll = (
  after: Ref<string | null | undefined>,
  getPageInfo: () =>
    { endCursor?: string | null; hasNextPage: boolean } | undefined,
) => {
  const isComplete = ref(false)

  watch(
    getPageInfo,
    (pageInfo) => {
      if (!pageInfo) return

      if (!pageInfo.hasNextPage) isComplete.value = true
      // the server renders the first page only, the client fetches the rest
      else if (import.meta.client) after.value = pageInfo.endCursor
    },
    { immediate: true },
  )

  return isComplete
}

const RENDER_STEP = 50

/** Renders a long list in steps: `limit` grows whenever the `sentinel` element after the rendered rows comes close to the viewport, and falls back once a source changes. */
// callers key the sentinel by `limit`, as the observer only reports changes and a sentinel still in range after a step would never grow the list again
export const useRenderLimit = (resetSources: WatchSource[]) => {
  const limit = ref(RENDER_STEP)
  const sentinel = ref<HTMLElement>()

  watch(resetSources, () => {
    limit.value = RENDER_STEP
  })
  useIntersectionObserver(
    sentinel,
    ([entry]) => {
      if (entry?.isIntersecting) limit.value += RENDER_STEP
    },
    { rootMargin: '600px' },
  )

  return { limit, sentinel }
}

/** Scrolls to the row that the route hash names as `#<prefix>-<id>` and tints it for a moment, once its list is ready. */
export const useRowHighlight = (
  prefix: string,
  isReady: Ref<boolean>,
  // lets a progressively rendered list render the row before it is looked up
  onRow?: (rowId: string) => void,
) => {
  const route = useRoute()

  watch(
    [isReady, () => route.hash],
    async ([isReadyNow, hash]) => {
      if (!import.meta.client || !isReadyNow || !hash.startsWith(`#${prefix}-`))
        return

      onRow?.(hash.slice(prefix.length + 2))

      await nextTick()

      // a search or filter may hide the row
      const element = document.getElementById(hash.slice(1))

      if (!element) return

      element.scrollIntoView({ block: 'center' })
      element.classList.add('rounded-medium', 'bg-surface-raised')
      setTimeout(
        () => element.classList.remove('rounded-medium', 'bg-surface-raised'),
        2000,
      )
    },
    { immediate: true },
  )
}
