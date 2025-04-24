import { test, expect } from '@playwright/test'

import { TESTING_COOKIE_NAME } from '#src/shared/utils/constants'
import { testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/robots.txt'

testPageLoad(PAGE_PATH)

test.describe('robots.txt', () => {
  test('content', async ({ request }) => {
    const resp = await request.get(PAGE_PATH, {
      headers: {
        Cookie: `${TESTING_COOKIE_NAME}=true`,
      },
    })
    expect(await resp.text()).toMatchSnapshot(`robots-txt-content.txt`)
  })
})
