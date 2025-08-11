import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { TIMEOUT } from '#tests/e2e/utils/constants'
import { testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/session/create'

testPageLoad(PAGE_PATH)

appTest.describe('account sign-in page', () => {
  appTest('should display sign-in form', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)

    await expect(
      defaultPage.page.locator('span').filter({ hasText: 'Log in' }).first(),
    ).toBeVisible()
    await expect(
      defaultPage.page.getByRole('textbox', { name: 'Email address' }),
    ).toBeVisible()
    await expect(
      defaultPage.page.getByRole('textbox', { name: 'Password' }),
    ).toBeVisible()
    await expect(
      defaultPage.page.getByRole('button', { name: 'Log in' }),
    ).toBeVisible()
  })
})

appTest.describe('sign-in flow', () => {
  appTest(
    'should fill form and submit without errors',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      await defaultPage.page
        .getByRole('textbox', { name: 'Email address' })
        .fill('mail+sqitch-1@maev.si')
      await defaultPage.page
        .getByRole('textbox', { name: 'Password' })
        .fill('password')

      await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

      await defaultPage.page.waitForTimeout(2000)

      await expect(defaultPage.page).toHaveURL(/\/session\/create/)
    },
  )

  appTest(
    'should show error with invalid credentials',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      await defaultPage.page
        .getByRole('textbox', { name: 'Email address' })
        .fill('invalid@example.com')
      await defaultPage.page
        .getByRole('textbox', { name: 'Password' })
        .fill('wrongpassword')

      await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

      await defaultPage.page.waitForTimeout(2000)

      await expect(defaultPage.page).toHaveURL(/\/session\/create/)
    },
  )

  appTest(
    'should show validation error with empty fields',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

      await expect(
        defaultPage.page.locator('div').filter({ hasText: 'Required' }).first(),
      ).toBeVisible()
    },
  )
})

appTest.describe('visual regression', () => {
  appTest('sign-in form looks correct', async ({ page }) => {
    await page.goto(PAGE_PATH)
    await expect(page).toHaveScreenshot({ timeout: TIMEOUT })
  })
})
