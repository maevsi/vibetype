import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const BACK = { exact: true, name: /^back$/i } as const

appTest.describe('sign-in gate', () => {
  for (const path of [
    '/contact',
    '/dashboard',
    '/early-bird/create',
    '/event/create',
    '/preference/create',
    '/upload',
  ]) {
    appTest(`asks to sign in on ${path}`, async ({ defaultPage }) => {
      await defaultPage.goto(path)

      await expect(defaultPage.page).toHaveURL(
        new RegExp(`/session/create\\?to=${path}$`),
      )
      await expect(
        defaultPage.page.getByText('Log in to continue'),
      ).toBeVisible()
    })
  }

  appTest(
    'returns to the previous page with the back button',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto('/session/edit')
      await page.getByRole('link', { name: 'Join Early Bird' }).click()
      await expect(page).toHaveURL(/\/session\/create\?to=/)

      await page.getByRole('button', BACK).click()
      await expect(page).toHaveURL(/\/session\/edit$/)
    },
  )
})

appTest.describe('settings', () => {
  appTest('is linked once when signed out', async ({ defaultPage }) => {
    await defaultPage.goto('/event')

    await expect(
      defaultPage.page.getByRole('link', { name: 'Settings' }),
    ).toHaveCount(1)
  })

  authenticatedTest(
    'is linked from the profile only when signed in',
    async ({ defaultPage }) => {
      await defaultPage.goto('/event')

      await expect(
        defaultPage.page.getByRole('link', { name: 'Settings' }),
      ).toHaveCount(0)
    },
  )
})
