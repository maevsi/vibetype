import { expect } from '@playwright/test'

import { JWT_COOKIE_NAME } from '#src/node/static'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

authenticatedTest.describe('sign out', () => {
  authenticatedTest(
    'removes the session and returns to the start page',
    async ({ context, defaultPage }) => {
      await defaultPage.goto('/session/edit')
      await defaultPage.page.getByRole('button', { name: 'Log Out' }).click()

      await defaultPage.page.waitForURL(/\/\?signOut/)
      await expect
        .poll(async () =>
          (await context.cookies()).some(
            (cookie) => cookie.name === JWT_COOKIE_NAME,
          ),
        )
        .toBe(false)
    },
  )
})
