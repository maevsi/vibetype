// Run with `node --test shared/utils/urqlSsrHydration.test.ts`
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { setTimeout as wait } from 'node:timers/promises'

import {
  createClient,
  createRequest,
  fetchExchange,
  ssrExchange as getSsrExchange,
} from '@urql/core'
import { offlineExchange } from '@urql/exchange-graphcache'
import type { KeyingConfig, SerializedEntries } from '@urql/exchange-graphcache'
import { requestPolicyExchange } from '@urql/exchange-request-policy'
import { parse } from 'graphql'

import { getSsrHydrationExchanges } from './urqlSsrHydration.ts'

// `parse` instead of a `gql` tag keeps this test-only document out of codegen
const query = parse(
  'query Guest { guestByRowId(rowId: "1") { __typename feedback id rowId } }',
)
const getData = (feedback: string) => ({
  guestByRowId: { __typename: 'Guest', feedback, id: 'g1', rowId: '1' },
})
const getStorage = (initial: SerializedEntries = {}) => {
  let data = initial
  return {
    getData: () => data,
    onOnline: () => {},
    readData: async () => data,
    readMetadata: async () => [],
    writeData: async (entries: SerializedEntries) => {
      data = { ...data, ...entries }
    },
    writeMetadata: async () => {},
  }
}
const keys: KeyingConfig = {
  Guest: (data) => (typeof data.rowId === 'string' ? data.rowId : null),
}

// the stored cache of an earlier visit, in which the feedback was still old
const getStoredEntries = async () => {
  const storage = getStorage()
  await createClient({
    exchanges: [offlineExchange({ keys, storage }), fetchExchange],
    fetch: async () => Response.json({ data: getData('stored') }),
    url: 'http://localhost/graphql',
  })
    .query(query, {})
    .toPromise()
  await wait(50)
  return storage.getData()
}

const hydrate = async ({
  isStorageLoadedFirst,
  isWrapped,
}: {
  isStorageLoadedFirst: boolean
  isWrapped: boolean
}) => {
  const ssrExchange = getSsrExchange({ isClient: true })
  ssrExchange.restoreData({
    [createRequest(query, {}).key]: { data: JSON.stringify(getData('server')) },
  })
  const storage = getStorage(await getStoredEntries())
  const cacheExchange = offlineExchange({ keys, storage })
  const { answerFromSsr, skipCacheRead } = getSsrHydrationExchanges(ssrExchange)
  let requestCount = 0
  const client = createClient({
    exchanges: [
      requestPolicyExchange({}),
      ...(isWrapped
        ? [skipCacheRead, cacheExchange, answerFromSsr]
        : [cacheExchange]),
      ssrExchange,
      fetchExchange,
    ],
    fetch: async () => {
      requestCount++
      return Response.json({ data: getData('network') })
    },
    url: 'http://localhost/graphql',
  })

  if (isStorageLoadedFirst) await wait(0)

  const feedbacks: string[] = []
  client
    .query(query, {})
    .subscribe((result) => feedbacks.push(result.data?.guestByRowId.feedback))
  await wait(100)

  return {
    client,
    feedbacks,
    getRequestCount: () => requestCount,
  }
}

test('the stored cache wins over the server payload without the wrapper', async () => {
  const { feedbacks, getRequestCount } = await hydrate({
    isStorageLoadedFirst: true,
    isWrapped: false,
  })

  assert.deepEqual(feedbacks, ['stored', 'network'])
  assert.equal(getRequestCount(), 1)
})

for (const isStorageLoadedFirst of [true, false]) {
  test(`the server payload is used once (storage loaded first: ${isStorageLoadedFirst})`, async () => {
    const { client, feedbacks, getRequestCount } = await hydrate({
      isStorageLoadedFirst,
      isWrapped: true,
    })

    assert.deepEqual(feedbacks, ['server'])
    assert.equal(getRequestCount(), 0)

    const refetch = await client
      .query(query, {}, { requestPolicy: 'network-only' })
      .toPromise()

    assert.equal(refetch.data?.guestByRowId.feedback, 'network')
    assert.equal(getRequestCount(), 1)
  })
}
