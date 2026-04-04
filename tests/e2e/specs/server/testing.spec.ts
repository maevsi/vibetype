import { expect } from '@playwright/test'

import { TESTING_COOKIE_NAME } from '#src/node/static'
import { appTest } from '#tests/e2e/fixtures/appTest'

appTest.describe('testing', () => {
  appTest('cookie', async ({ defaultPage }) => {
    expect(
      (await defaultPage.page.context().cookies()).filter(
        (cookie) => cookie.name === TESTING_COOKIE_NAME,
      ).length,
    ).toBe(1)
  })
})
