import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { getFeatureTest } from '#tests/e2e/fixtures/featureTest'
import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`

testOgImage({
  dynamic: {
    de: `/de${PAGE_PATH}`,
    en: PAGE_PATH,
  },
})

appTest.describe('address', () => {
  // clipboard permissions are a Chromium feature, which both projects run on
  appTest('copies to the clipboard', async ({ context, defaultPage }) => {
    const { page } = defaultPage

    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await defaultPage.goto(PAGE_PATH)
    await page.getByRole('button', { name: 'Copy address' }).click()

    await expect(page.getByText('The address has been copied')).toBeVisible()
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
      'Vibetype, Virchowstraße 4, 34121 Kassel, Germany',
    )
  })
})

appTest.describe('with data', () => {
  // one viewport suffices to notice layout changes caused by data
  appTest.skip(({ isMobile }) => isMobile)
  testVisualRegression(PAGE_PATH)
})

const featureTest = getFeatureTest(['participation'])

featureTest.describe('with participation', () => {
  // one viewport suffices to notice layout changes caused by the flagged content
  featureTest.skip(({ isMobile }) => !isMobile)
  testVisualRegression(PAGE_PATH, false, { test: featureTest })
})
