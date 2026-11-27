import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { getFeatureTest } from '#tests/e2e/fixtures/featureTest'
import { SITE_URL } from '#tests/e2e/utils/constants'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/discover'

testVisualRegression(PAGE_PATH)

const featureTest = getFeatureTest(['category-browse'])

featureTest.describe('with categories', () => {
  // one viewport suffices to notice layout changes caused by the flagged content
  featureTest.skip(({ isMobile }) => !isMobile)
  testVisualRegression(PAGE_PATH, false, { test: featureTest })
})

appTest.describe('people', () => {
  testVisualRegression(`${PAGE_PATH}?type=people`)
})

appTest.describe('type switch', () => {
  appTest('keeps the search text', async ({ defaultPage }) => {
    const { page } = defaultPage

    await defaultPage.goto(PAGE_PATH)
    await page.getByRole('textbox').fill('party')
    await expect(page).toHaveURL(/\/discover\?q=party$/)

    await page.getByRole('tab', { name: 'People' }).click()

    await expect(page).toHaveURL(/\/discover\?q=party&type=people$/)
    await expect(page.getByRole('tab', { name: 'People' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(page.getByRole('textbox')).toHaveValue('party')
  })
})

appTest.describe('redirects', () => {
  appTest('leads /event to events', async ({ page }) => {
    await page.goto('/event?q=party')

    await expect(page).toHaveURL(`${SITE_URL}/discover?q=party`)
  })

  appTest('leads /account to people', async ({ page }) => {
    await page.goto('/account?q=party')

    await expect(page).toHaveURL(`${SITE_URL}/discover?q=party&type=people`)
  })
  appTest('keeps the locale prefix', async ({ page }) => {
    await page.goto('/de/event')

    await expect(page).toHaveURL(`${SITE_URL}/de/discover`)
  })
})
