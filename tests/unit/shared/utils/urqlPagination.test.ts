import { createClient, fetchExchange } from '@urql/core'
import { cacheExchange } from '@urql/exchange-graphcache'
import { relayPagination } from '@urql/exchange-graphcache/extras'
import { parse } from 'graphql'
import { describe, expect, test } from 'vitest'

import { removeRelayPaginationPagesStale } from '#src/shared/utils/urqlPagination'

const query = parse(`
  query EventList($after: String) {
    allEvents(after: $after, first: 1) {
      __typename
      nodes { __typename id name city }
      pageInfo { __typename endCursor hasNextPage }
    }
  }
`)
// a page an earlier release persisted, which did not select `city` yet
const queryOld = parse(`
  query EventList($after: String) {
    allEvents(after: $after, first: 1) {
      __typename
      nodes { __typename id name }
      pageInfo { __typename endCursor hasNextPage }
    }
  }
`)
const getPage = (id: string, endCursor: string, city?: string) => ({
  allEvents: {
    __typename: 'EventConnection',
    nodes: [{ __typename: 'Event', id, name: id, ...(city ? { city } : {}) }],
    pageInfo: { __typename: 'PageInfo', endCursor, hasNextPage: true },
  },
})

// answers every query with the page its `after` names, as the API would
const pages: Record<string, ReturnType<typeof getPage>> = {
  '': getPage('1', 'a', 'city'),
  a: getPage('2', 'b', 'city'),
}
const fetch = async (_url: RequestInfo | URL, init?: RequestInit) =>
  Response.json({
    data: pages[JSON.parse(String(init?.body)).variables?.after ?? ''],
  })

const getClient = (isFixed: boolean) =>
  createClient({
    exchanges: [
      cacheExchange({
        resolvers: { Query: { allEvents: relayPagination() } },
        updates: isFixed
          ? { Query: { allEvents: removeRelayPaginationPagesStale } }
          : {},
      }),
      fetchExchange,
    ],
    fetch,
    preferGetMethod: false,
    url: 'http://localhost',
  })
const getIds = (data?: { allEvents: { nodes: { id: string }[] } } | null) =>
  data?.allEvents.nodes.map((node) => node.id)

describe('removeRelayPaginationPagesStale', () => {
  for (const isFixed of [false, true])
    test(`a stale page ${isFixed ? 'is dropped' : 'empties the list'}`, async () => {
      const client = getClient(isFixed)
      // the stale page is written without `city`, as an earlier release did
      pages.a = getPage('2', 'b')
      await client.query(queryOld, { after: 'a' }).toPromise()
      pages.a = getPage('2', 'b', 'city')

      const { data } = await client
        .query(query, {}, { requestPolicy: 'network-only' })
        .toPromise()

      expect(getIds(data)).toEqual(isFixed ? ['1'] : undefined)
    })

  test('keeps the pages a next page appends to', async () => {
    const client = getClient(true)
    await client.query(query, {}).toPromise()

    const { data } = await client.query(query, { after: 'a' }).toPromise()

    expect(getIds(data)).toEqual(['1', '2'])
  })
})
