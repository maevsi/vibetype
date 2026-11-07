import { makeOperation, mapExchange } from '@urql/core'
import type { ssrExchange as getSsrExchange } from '@urql/core'

// Graphcache sits before `ssrExchange`, so once its persisted storage has
// loaded it answers a page's first queries itself: the request policy exchange
// upgrades them to `cache-and-network`, the stale stored result renders first,
// and the refetch graphcache then sends is `network-only`, which `ssrExchange`
// never answers. The server's payload goes unused and every page load costs a
// second request. These two exchanges wrap graphcache to route a query the
// server rendered past the cache read and back into `ssrExchange`, so its
// result still flows through graphcache and gets written.
export const getSsrHydrationExchanges = (
  ssrExchange: ReturnType<typeof getSsrExchange>,
) => ({
  skipCacheRead: mapExchange({
    onOperation: (operation) => {
      if (operation.kind !== 'query') return

      // `extractData` drops a result once it was used, so only the first
      // execution of each server-rendered query skips the cache read
      if (
        operation.key in ssrExchange.extractData() &&
        (operation.context.requestPolicy === 'cache-first' ||
          operation.context.requestPolicy === 'cache-and-network')
      )
        return makeOperation(operation.kind, operation, {
          ...operation.context,
          isSsrHydration: true,
          requestPolicy: 'network-only',
        })

      // graphcache re-executes the operation it was handed once its storage
      // has loaded, which would otherwise refetch the fresh server result
      if (operation.context.isSsrHydration)
        return makeOperation(operation.kind, operation, {
          ...operation.context,
          isSsrHydration: false,
          requestPolicy: 'cache-first',
        })
    },
  }),
  answerFromSsr: mapExchange({
    onOperation: (operation) => {
      if (!operation.context.isSsrHydration) return

      // The offline exchange queues queries sent before its storage loaded
      // and resends them afterwards; one already answered from the server's
      // payload is turned into a no-op teardown instead of being refetched
      if (!(operation.key in ssrExchange.extractData()))
        return makeOperation('teardown', operation)

      return makeOperation(operation.kind, operation, {
        ...operation.context,
        requestPolicy: 'cache-first',
      })
    },
  }),
})
