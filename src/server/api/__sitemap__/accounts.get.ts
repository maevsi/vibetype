import type { H3Event } from 'h3'
import type { SitemapUrl } from '#sitemap/types'

import { graphql } from '~~/gql/generated'

export const accountsSitemapQuery = graphql(`
  query AccountsSitemap($after: Cursor, $first: Int!) {
    allAccounts(after: $after, first: $first, orderBy: ROW_ID_ASC) {
      nodes {
        username
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)

const toSitemapUrl = (loc: string): SitemapUrl => ({
  loc,
  _i18nTransform: true,
})

// Accounts carry no visibility flag, unlike events - a username is public by
// design, so every account returned here is fair game for the sitemap.
const fetchAccountSitemapUrls = async (
  event: H3Event,
): Promise<SitemapUrl[]> => {
  const urls: SitemapUrl[] = []
  let after: string | null | undefined

  do {
    const result = await event.context.$urql.value
      .query(accountsSitemapQuery, { after, first: ITEMS_PER_PAGE_LARGE })
      .toPromise()

    if (result.error) throw result.error

    const connection = result.data?.allAccounts

    for (const node of connection?.nodes ?? []) {
      urls.push(toSitemapUrl(`/account/view/${node.username}`))
    }

    after = connection?.pageInfo.hasNextPage
      ? connection.pageInfo.endCursor
      : undefined
  } while (after)

  return urls
}

// Accounts are stored in the database and change independently of deploys, so
// they're resolved by this source at runtime instead of being baked into the
// sitemap at build time. Cached independently of and longer than the sitemap
// module's own cache to avoid re-querying the backend on every crawl.
export default defineCachedEventHandler(fetchAccountSitemapUrls, {
  getKey: () => 'urls',
  maxAge: 60 * 60 * 24,
  name: 'sitemap-accounts',
})
