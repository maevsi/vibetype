import { test, expect } from '@playwright/test'

import { TESTING_COOKIE_NAME } from '#src/shared/utils/constants'
import { testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/sitemap.xml'

testPageLoad(PAGE_PATH)

test.describe('sitemap', () => {
  const languages = ['en', 'de']

  test('index', async ({ request }) => {
    const resp = await request.get('/sitemap_index.xml', {
      headers: {
        Cookie: `${TESTING_COOKIE_NAME}=true`,
      },
    })
    const text = await resp.text()

    for (const language of languages) {
      expect(text).toContain(
        `http://localhost:3001/__sitemap__/${language}.xml`,
      )
    }
  })

  test('content', async ({ request }) => {
    for (const language of languages) {
      const resp = await request.get(`/__sitemap__/${language}.xml`, {
        headers: {
          Cookie: `${TESTING_COOKIE_NAME}=true`,
        },
      })
      const text = await resp.text()
      expect(text.replace(/\n.+<\/lastmod>/g, '')).toMatchSnapshot(
        `sitemap-content-${language}.xml`,
      )
    }
  })
})
