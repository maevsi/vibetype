import { expect } from '@playwright/test'

import { JWT_COOKIE_NAME } from '#src/node/static'
import { TESTING_ACCOUNT_USERNAME } from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/account/view/${TESTING_ACCOUNT_USERNAME}`

testOgImage({
  dynamic: {
    de: `/de${PAGE_PATH}`,
    en: PAGE_PATH,
  },
})

appTest.describe('with data', () => {
  // one viewport suffices to notice layout changes caused by data
  appTest.skip(({ isMobile }) => isMobile)
  testVisualRegression(PAGE_PATH)
})

authenticatedTest.describe('with data signed in', () => {
  // one viewport suffices to notice layout changes caused by data
  authenticatedTest.skip(({ isMobile }) => isMobile)
  testVisualRegression(PAGE_PATH, false, { test: authenticatedTest })
})

authenticatedTest.describe('sign out', () => {
  authenticatedTest(
    'removes the session and returns to the start page',
    async ({ context, defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)
      await page.getByRole('button', { name: 'More' }).click()
      await page.getByRole('menuitem', { name: 'Log Out' }).click()

      await page.waitForURL(/\/\?signOut/)
      await expect
        .poll(async () =>
          (await context.cookies()).some(
            (cookie) => cookie.name === JWT_COOKIE_NAME,
          ),
        )
        .toBe(false)
    },
  )
})
