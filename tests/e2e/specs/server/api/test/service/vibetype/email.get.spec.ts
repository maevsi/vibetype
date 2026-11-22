import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { TIMEOUT } from '#tests/e2e/utils/constants'
import { testPageLoad, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/api/test/service/vibetype/email'

testPageLoad(PAGE_PATH)
testVisualRegression(PAGE_PATH, true)

appTest.describe('visual regression in dark mode', () => {
  appTest('looks as before', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto(PAGE_PATH)

    await expect(page).toHaveScreenshot({ timeout: TIMEOUT })
  })
})
