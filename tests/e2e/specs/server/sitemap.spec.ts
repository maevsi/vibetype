import { test, expect } from '@playwright/test'

import { SITE_URL } from '#tests/e2e/utils/constants'
import { testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/sitemap_index.xml'

testPageLoad(PAGE_PATH)

test.describe('sitemap', () => {
  const languages = ['en', 'de']

  test('index', async ({ request }) => {
    const resp = await request.get(PAGE_PATH)
    const text = await resp.text()

    for (const language of languages) {
      expect(text).toContain(`${SITE_URL}/__sitemap__/${language}.xml`)
    }
  })

  test('content', async ({ request }) => {
    for (const language of languages) {
      const resp = await request.get(`/__sitemap__/${language}.xml`)
      const text = (await resp.text())
        // Public event and account URLs depend on whatever's in the database
        // during this run (shared with other specs), so they aren't stable
        // across runs - only the static route set is asserted against the
        // snapshot here.
        .replaceAll(/ {4}<url>[\s\S]*?<\/url>\n/g, (urlBlock) =>
          urlBlock.includes('/event/view/') ||
          urlBlock.includes('/account/view/')
            ? ''
            : urlBlock,
        )
        .replaceAll(/\n.+<\/lastmod>/g, '')
        .replaceAll(SITE_URL, 'https://example.com')

      expect(text).toMatchSnapshot(
        `sitemap-content-${process.env.VIO_SERVER}-${language}.txt`,
      )
    }
  })

  test('events source', async ({ request }) => {
    const resp = await request.get('/api/__sitemap__/events')

    expect(resp.ok()).toBeTruthy()

    const urls: unknown = await resp.json()

    expect(Array.isArray(urls)).toBe(true)

    for (const url of urls as { loc: string }[]) {
      expect(url.loc).toMatch(/^\/event\/view\/[^/]+\/[^/]+$/)
    }
  })

  test('accounts source', async ({ request }) => {
    const resp = await request.get('/api/__sitemap__/accounts')

    expect(resp.ok()).toBeTruthy()

    const urls: unknown = await resp.json()

    expect(Array.isArray(urls)).toBe(true)

    for (const url of urls as { loc: string }[]) {
      expect(url.loc).toMatch(/^\/account\/view\/[^/]+$/)
    }
  })
})
