import { expect } from '@playwright/test'

import { TESTING_ACCOUNT_USERNAME } from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { getFeatureTest } from '#tests/e2e/fixtures/featureTest'

const BACK = { exact: true, name: 'Back' } as const

appTest.describe('sign-in gate', () => {
  for (const path of [
    '/account/edit/someone',
    '/account/view/someone/block',
    '/contact',
    '/dashboard',
    '/event/edit/someone/some-event',
    '/event/view/someone/some-event/attendance',
    '/event/view/someone/some-event/guest',
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

appTest.describe('back button', () => {
  appTest(
    'follows the browser history after its own back button',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto('/event')
      await page.getByRole('link', { name: 'Settings' }).click()
      await expect(page).toHaveURL(/\/session\/edit$/)
      await page.getByRole('link', { name: 'Language' }).click()
      await expect(page).toHaveURL(/\/session\/edit\/language$/)

      await page.goBack()
      await expect(page).toHaveURL(/\/session\/edit$/)
      await page.getByRole('link', { name: 'Language' }).click()
      await expect(page).toHaveURL(/\/session\/edit\/language$/)
      await page.getByRole('button', BACK).click()
      await expect(page).toHaveURL(/\/session\/edit$/)

      await page.goBack()
      await expect(page).toHaveURL(/\/event$/)
    },
  )

  appTest('leads home without a previous page', async ({ defaultPage }) => {
    const { page } = defaultPage

    await defaultPage.goto('/session/edit/language')
    await page.getByRole('button', BACK).click()

    await expect(page).toHaveURL(/\/$/)
  })
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
      await defaultPage.goto(`/account/view/${TESTING_ACCOUNT_USERNAME}`)

      await expect(
        defaultPage.page.getByRole('link', { name: 'Settings' }),
      ).toHaveCount(1)
    },
  )
})

authenticatedTest(
  'asks before discarding unsaved changes',
  async ({ defaultPage }) => {
    const { page } = defaultPage

    await defaultPage.goto('/event/create')
    await page.getByLabel('Name', { exact: true }).fill('Unsaved')

    page.once('dialog', (dialog) => dialog.dismiss())
    await page.getByRole('button', BACK).click()
    await expect(page).toHaveURL(/\/event\/create$/)

    page.once('dialog', (dialog) => dialog.accept())
    await page.getByRole('button', BACK).click()
    await expect(page).not.toHaveURL(/\/event\/create$/)
  },
)

appTest.describe('unfinished pages', () => {
  for (const [path, feature] of [
    ['/attendance', 'participation'],
    ['/guest', 'invitations'],
    ['/notification', 'notifications'],
  ] as const) {
    getFeatureTest([feature])(
      `opens ${path} with its feature flag`,
      async ({ defaultPage }) => {
        const response = await defaultPage.page.goto(path)

        expect(response?.status()).toBe(200)
      },
    )
  }
})
