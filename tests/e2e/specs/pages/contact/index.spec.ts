import { expect } from '@playwright/test'

import { TESTING_CONTACT_ROW_ID } from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/contact'

testVisualRegression(PAGE_PATH, false, { test: authenticatedTest })

authenticatedTest(
  'returns to the edited contact without a history entry',
  async ({ defaultPage }) => {
    const { page } = defaultPage
    const hash = `#contact-${TESTING_CONTACT_ROW_ID}`

    await defaultPage.goto('/dashboard')
    await defaultPage.goto(PAGE_PATH)
    await page.locator(`${hash} a`).first().click()
    await expect(page).toHaveURL(
      new RegExp(`/contact/edit/${TESTING_CONTACT_ROW_ID}`),
    )

    await page.getByRole('button', { exact: true, name: 'Back' }).click()
    await expect(page).toHaveURL(new RegExp(`/contact${hash}$`))
    await expect(page.locator(hash)).toBeInViewport()

    await page.goBack()
    await expect(page).not.toHaveURL(/\/contact\/edit\//)
  },
)
