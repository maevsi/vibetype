import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const PAGE_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`

authenticatedTest.describe('deletion', () => {
  // the drawer's history entry used to cancel the redirect, leaving the deleted event on screen
  authenticatedTest('leads to the own events list', async ({ defaultPage }) => {
    const { page } = defaultPage

    await defaultPage.goto(PAGE_PATH)
    await page
      .locator('[data-slot="top-bar"] button[aria-haspopup="menu"]')
      .click()
    await page.getByRole('menuitem', { name: 'Delete event' }).click()

    const drawer = page.getByRole('dialog')
    await drawer.locator('input[type="password"]').fill('password')
    await drawer.getByRole('button', { name: /delete/i }).click()

    await expect(page).toHaveURL(
      new RegExp(`/event/view/${TESTING_ACCOUNT_USERNAME}$`),
    )
  })
})
