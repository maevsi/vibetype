import { makeOperation, mapExchange } from '@urql/core'
import type { ssrExchange as getSsrExchange } from '@urql/core'

// Graphcache sits before `ssrExchange`, so once its persisted storage has
// loaded it answers a page's first queries itself: the request policy exchange
// upgrades them to `cache-and-network`, the stale stored result renders first,
// and the refetch graphcache then sends is `network-only`, which `ssrExchange`
// never answers. The server's payload goes unused and every page load costs a
// second request. These two exchanges wrap graphcache to route a query the
// server rendered past the cache read and back into `ssrExchange`, so its
// result still flows through graphcache and gets written. Before the storage
// has loaded, graphcache has nothing stale to answer with, so they stay idle.
export const getSsrHydrationExchanges = ({
  isCacheHydrated,
  ssrExchange,
}: {
  isCacheHydrated: () => boolean
  ssrExchange: ReturnType<typeof getSsrExchange>
}) => ({
  skipCacheRead: mapExchange({
    onOperation: (operation) => {
      if (operation.kind !== 'query') return

      // Graphcache re-executes the operation it was handed whenever another
      // result touches its entities, synchronously and before `ssrExchange`
      // drops the used payload, so answering those from the payload again
      // makes two queries with overlapping entities overwrite each other
      // forever. They read the cache like any other operation instead.
      if (operation.context.isSsrHydration)
        return makeOperation(operation.kind, operation, {
          ...operation.context,
          isSsrHydration: false,
          requestPolicy: 'cache-first',
        })

      if (
        isCacheHydrated() &&
        operation.key in ssrExchange.extractData() &&
        (operation.context.requestPolicy === 'cache-first' ||
          operation.context.requestPolicy === 'cache-and-network')
      )
        return makeOperation(operation.kind, operation, {
          ...operation.context,
          isSsrHydration: true,
          requestPolicy: 'network-only',
        })
    },
  }),
  answerFromSsr: mapExchange({
    onOperation: (operation) =>
      operation.context.isSsrHydration
        ? makeOperation(operation.kind, operation, {
            ...operation.context,
            requestPolicy: 'cache-first',
          })
        : undefined,
  }),
})
