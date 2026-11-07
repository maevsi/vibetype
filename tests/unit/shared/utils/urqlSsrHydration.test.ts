import { setTimeout as wait } from 'node:timers/promises'

import {
  createClient,
  createRequest,
  fetchExchange,
  makeOperation,
  mapExchange,
  ssrExchange as getSsrExchange,
} from '@urql/core'
import type { DocumentNode } from 'graphql'
import { offlineExchange } from '@urql/exchange-graphcache'
import type { SerializedEntries } from '@urql/exchange-graphcache'
import { requestPolicyExchange } from '@urql/exchange-request-policy'
import { parse } from 'graphql'
import { describe, expect, test } from 'vitest'

import { getSsrHydrationExchanges } from '#src/shared/utils/urqlSsrHydration'

const accountQuery = parse('query Account { account { __typename id name } }')
const eventQuery = parse(
  'query Event { event { __typename id account { __typename id name } } }',
)
const getAccountData = (name: string) => ({
  account: { __typename: 'Account', id: '1', name },
})
// the account's name differs from the account query's, as both are written to
// the same entity and so re-execute each other
const eventData = {
  event: {
    __typename: 'Event',
    id: '1',
    account: { __typename: 'Account', id: '1', name: 'event' },
  },
}
const storedEntries: SerializedEntries = {
  'Account:1.__typename': '"Account"',
  'Account:1.id': '"1"',
  'Account:1.name': '"stored"',
  'Query.account': ':"Account:1"',
}

const hydrate = ({
  isWrapped = true,
  readDelay = 0,
  ssrData,
}: {
  isWrapped?: boolean
  readDelay?: number
  ssrData: [DocumentNode, unknown][]
}) => {
  const ssrExchange = getSsrExchange({ isClient: true })
  ssrExchange.restoreData(
    Object.fromEntries(
      ssrData.map(([query, data]) => [
        createRequest(query, {}).key,
        { data: JSON.stringify(data) },
      ]),
    ),
  )

  let isCacheHydrated = false
  const { answerFromSsr, skipCacheRead } = getSsrHydrationExchanges({
    isCacheHydrated: () => isCacheHydrated,
    ssrExchange,
  })
  const cacheExchange = offlineExchange({
    storage: {
      onCacheHydrated: () => {
        isCacheHydrated = true
      },
      onOnline: () => {},
      readData: async () => {
        if (readDelay) await wait(readDelay)
        return storedEntries
      },
      readMetadata: async () => [],
      writeData: async () => {},
      writeMetadata: async () => {},
    },
  })

  // a synchronous re-execution loop would block the event loop, so it is
  // broken off here and reported instead
  let operationCount = 0
  let isLooping = false
  const loopGuard = mapExchange({
    onOperation: (operation) => {
      if (++operationCount < 100) return
      isLooping = true
      return makeOperation('teardown', operation)
    },
  })

  let requestCount = 0
  const client = createClient({
    exchanges: [
      requestPolicyExchange({}),
      ...(isWrapped
        ? [skipCacheRead, cacheExchange, answerFromSsr]
        : [cacheExchange]),
      loopGuard,
      ssrExchange,
      fetchExchange,
    ],
    // queries are sent as GET requests, with the operation in the URL
    fetch: async (url) => {
      requestCount++
      return Response.json({
        data:
          new URL(String(url)).searchParams.get('operationName') === 'Account'
            ? getAccountData('network')
            : eventData,
      })
    },
    url: 'http://localhost/graphql',
  })

  return {
    client,
    getRequestCount: () => requestCount,
    getIsLooping: () => isLooping,
  }
}

const getAccountNames = (client: ReturnType<typeof createClient>) => {
  const names: string[] = []
  client
    .query(accountQuery, {})
    .subscribe((result) => names.push(result.data?.account.name))
  return names
}

describe('getSsrHydrationExchanges', () => {
  test('without them the stored cache renders before a refetch', async () => {
    const { client, getRequestCount } = hydrate({
      isWrapped: false,
      ssrData: [[accountQuery, getAccountData('server')]],
    })
    await wait(10)

    const names = getAccountNames(client)
    await wait(50)

    expect(names).toEqual(['stored', 'network'])
    expect(getRequestCount()).toBe(1)
  })

  test('render the server payload once the storage has loaded', async () => {
    const { client, getRequestCount } = hydrate({
      ssrData: [[accountQuery, getAccountData('server')]],
    })
    await wait(10)

    const names = getAccountNames(client)
    await wait(50)

    expect(names).toEqual(['server'])
    expect(getRequestCount()).toBe(0)
  })

  test('stay idle while the storage is still loading', async () => {
    const { client, getRequestCount } = hydrate({
      readDelay: 20,
      ssrData: [[accountQuery, getAccountData('server')]],
    })

    const names = getAccountNames(client)
    await wait(50)

    expect(names).toEqual(['server'])
    expect(getRequestCount()).toBe(0)
  })

  test('settle queries that share entities', async () => {
    const { client, getIsLooping } = hydrate({
      ssrData: [
        [accountQuery, getAccountData('server')],
        [eventQuery, eventData],
      ],
    })
    await wait(10)

    const names = getAccountNames(client)
    const events: unknown[] = []
    client
      .query(eventQuery, {})
      .subscribe((result) => events.push(result.data?.event))
    await wait(50)

    expect(getIsLooping()).toBe(false)
    expect(names.length).toBeGreaterThan(0)
    expect(events.length).toBeGreaterThan(0)
  })

  test('leave explicit network requests alone', async () => {
    const { client, getRequestCount } = hydrate({
      ssrData: [[accountQuery, getAccountData('server')]],
    })
    await wait(10)

    const result = await client
      .query(accountQuery, {}, { requestPolicy: 'network-only' })
      .toPromise()

    expect(result.data?.account.name).toBe('network')
    expect(getRequestCount()).toBe(1)
  })
})
