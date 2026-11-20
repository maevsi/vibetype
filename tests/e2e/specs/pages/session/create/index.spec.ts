import { expect } from '@playwright/test'

import { SITE_NAME } from '#src/node/static'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { SITE_URL } from '#tests/e2e/utils/constants'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/session/create'

testVisualRegression(PAGE_PATH)

appTest.describe('signed out in the iOS app', () => {
  appTest.beforeEach(async ({ context }) => {
    await context.addCookies([
      { name: `${SITE_NAME}_platform`, url: SITE_URL, value: 'ios' },
    ])
  })

  appTest(
    'returns to the page that requires signing in',
    async ({ defaultPage, page }) => {
      await defaultPage.goto('/event/ingest/image')

      expect(page.url()).toBe(`${SITE_URL}${PAGE_PATH}?to=/event/ingest/image`)
      await expect(page.getByText('Log in to continue.')).toBeVisible()
    },
  )

  appTest(
    'still opens other pages on the home page',
    async ({ defaultPage, page }) => {
      await defaultPage.goto('/event')

      expect(page.url()).toBe(`${SITE_URL}/`)
    },
  )
})
