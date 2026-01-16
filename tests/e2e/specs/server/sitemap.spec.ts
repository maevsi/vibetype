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
      const text = await resp.text()

      expect(
        text
          .replace(/\n.+<\/lastmod>/g, '')
          .replace(new RegExp(SITE_URL, 'g'), 'https://example.com'),
      ).toMatchSnapshot(
        `sitemap-content-${process.env.VIO_SERVER}-${language}.txt`,
      )
    }
  })
})
