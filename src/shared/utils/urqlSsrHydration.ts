import { makeOperation, mapExchange } from '@urql/core'
import type {
  Client,
  Exchange,
  Operation,
  ssrExchange as getSsrExchange,
} from '@urql/core'

// Graphcache attaches its storage only once it has been read, and never
// persists what it wrote before that, which includes every result the server
// rendered. Those pages would then be missing offline. This exchange, placed
// before graphcache, remembers the queries it sees until then, and `refetch`,
// called whenever a store's storage is attached, refetches them once all are,
// so their results get written again and persisted.
// TODO: remove once `@urql/exchange-graphcache` persists these itself (https://github.com/urql-graphql/urql/pull/3926), each refetch costs a request per query on every full page load
export const getRefetchBeforeHydrationExchange = () => {
  const operations = new Map<Client, Map<number, Operation>>()
  let isCacheHydrated = false

  const exchange: Exchange = (input) => {
    const clientOperations = new Map<number, Operation>()
    operations.set(input.client, clientOperations)

    return mapExchange({
      onOperation: (operation) => {
        if (isCacheHydrated) return

        if (operation.kind === 'query')
          clientOperations.set(operation.key, operation)
        if (operation.kind === 'teardown')
          clientOperations.delete(operation.key)
      },
    })(input)
  }

  // every client composes its own graphcache store, each reporting once that its storage is attached
  let hydratedCount = 0

  const refetch = () => {
    hydratedCount += 1
    if (isCacheHydrated || hydratedCount < operations.size) return

    isCacheHydrated = true

    for (const [client, clientOperations] of operations) {
      for (const operation of clientOperations.values()) {
        client.reexecuteOperation(
          makeOperation(operation.kind, operation, {
            ...operation.context,
            requestPolicy: 'network-only',
          }),
        )
      }
    }

    operations.clear()
  }

  return { exchange, refetch }
}

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
