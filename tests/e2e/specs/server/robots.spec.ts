import { test, expect } from '@playwright/test'

import { SITE_URL } from '#tests/e2e/utils/constants'
import { testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/robots.txt'

testPageLoad(PAGE_PATH)

test.describe('robots.txt', () => {
  test('content', async ({ request }) => {
    const resp = await request.get(PAGE_PATH)
    const text = (await resp.text()).replaceAll(SITE_URL, 'https://example.com')
    expect(text).toMatchSnapshot(
      `robots-txt-content-${
        process.env.VIO_SERVER === 'development' ? 'development' : 'production'
      }.txt`,
    )
  })
})
