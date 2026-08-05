import type { H3Event } from 'h3'
import type { SitemapUrl } from '#sitemap/types'

import { graphql } from '~~/gql/generated'
import { EventVisibility } from '~~/gql/generated/graphcache'

export const eventsSitemapQuery = graphql(`
  query EventsSitemap($after: Cursor, $first: Int!) {
    allEvents(after: $after, first: $first, orderBy: ROW_ID_ASC) {
      nodes {
        accountByCreatedBy {
          username
        }
        slug
        visibility
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

// Postgraphile's row-level security already scopes `allEvents` to what an
// anonymous requester (no cookie is forwarded here) may see, i.e. public
// events only. `visibility` is still checked defensively so a backend change
// can't silently leak unlisted/private event URLs into the sitemap.
const fetchEventSitemapUrls = async (event: H3Event): Promise<SitemapUrl[]> => {
  const urls: SitemapUrl[] = []
  let after: string | null | undefined

  do {
    const result = await event.context.$urql.value
      .query(eventsSitemapQuery, { after, first: ITEMS_PER_PAGE_LARGE })
      .toPromise()

    if (result.error) throw result.error

    const connection = result.data?.allEvents

    for (const node of connection?.nodes ?? []) {
      const username = node.accountByCreatedBy?.username

      if (!username || node.visibility !== EventVisibility.Public) continue

      urls.push(toSitemapUrl(`/event/view/${username}/${node.slug}`))
    }

    after = connection?.pageInfo.hasNextPage
      ? connection.pageInfo.endCursor
      : undefined
  } while (after)

  return urls
}

// Events are stored in the database and change independently of deploys, so
// they're resolved by this source at runtime instead of being baked into the
// sitemap at build time. Cached independently of and longer than the sitemap
// module's own cache to avoid re-querying the backend on every crawl.
export default defineCachedEventHandler(fetchEventSitemapUrls, {
  getKey: () => 'urls',
  maxAge: 60 * 60 * 24,
  name: 'sitemap-events',
})
