import { test, expect } from '@playwright/test'

import { SITE_URL } from '#tests/e2e/utils/constants'
import { testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/robots.txt'

testPageLoad(PAGE_PATH)

test.describe('robots.txt', () => {
  test('content', async ({ request }) => {
    const resp = await request.get(PAGE_PATH)
    expect(
      (await resp.text()).replace(
        new RegExp(SITE_URL, 'g'),
        'https://example.com',
      ),
    ).toMatchSnapshot(
      `robots-txt-content-${
        process.env.NODE_ENV === 'production' ? 'production' : 'development'
      }.txt`,
    )
  })
})
