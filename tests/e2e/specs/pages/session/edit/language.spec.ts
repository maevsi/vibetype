import { expect } from '@playwright/test'

import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

authenticatedTest.describe('language', () => {
  authenticatedTest(
    'switches the locale and saves it to the account',
    async ({ defaultPage }) => {
      await defaultPage.goto('/session/edit/language')

      const saved = defaultPage.page.waitForResponse(
        (response) =>
          response.request().postData()?.includes('UpdateOwnContactLanguage') ??
          false,
      )
      await defaultPage.page.getByRole('radio', { name: 'Deutsch' }).click()

      await defaultPage.page.waitForURL(/\/de\/session\/edit\/language$/)
      expect((await (await saved).json()).errors).toBeUndefined()
      await expect(defaultPage.page.getByRole('alert')).toHaveCount(0)
    },
  )
})
