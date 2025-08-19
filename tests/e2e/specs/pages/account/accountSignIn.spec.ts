import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'

const PAGE_PATH = '/session/create'

appTest.describe('authentication', () => {
  appTest('should login with jonas account', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH, { isLoading: false })

    await defaultPage.page
      .getByRole('textbox', { name: 'Email address' })
      .fill('mail+sqitch-1@maev.si')
    await defaultPage.page
      .getByRole('textbox', { name: 'Password' })
      .fill('password')

    await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

    await expect(defaultPage.page).toHaveURL(/\/dashboard/, {
      timeout: 10000,
    })
    await expect(
      defaultPage.page.getByRole('heading', { name: 'You Should Not Miss' })
    ).toBeVisible()
  })

  appTest('should login with peter account', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH, { isLoading: false })

    await defaultPage.page
      .getByRole('textbox', { name: 'Email address' })
      .fill('mail+sqitch-2@maev.si')
    await defaultPage.page
      .getByRole('textbox', { name: 'Password' })
      .fill('password')

    await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

    await expect(defaultPage.page).toHaveURL(/\/dashboard/, {
      timeout: 10000,
    })
    await expect(
      defaultPage.page.getByRole('heading', { name: 'You Should Not Miss' })
    ).toBeVisible()
  })
})
