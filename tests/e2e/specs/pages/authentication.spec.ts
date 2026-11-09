import { expect, type Page } from '@playwright/test'

import {
  TESTING_ACCOUNT_PASSWORD,
  TESTING_ACCOUNT_USERNAME,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'

// The testing backend answers the GraphQL operations, so no database is needed.
// The Turnstile script is replaced, as these flows test authentication, not the captcha.
const TURNSTILE_SCRIPT = `window.turnstile = {
  remove: () => {},
  render: (element, { callback }) => {
    callback('XXXX.DUMMY.TOKEN.XXXX')
    window.isTurnstileTokenIssued = true
    return 'widget'
  },
  reset: () => {},
}`

const goto = async ({
  defaultPage,
  path,
}: {
  defaultPage: { goto: (url: string) => Promise<void>; page: Page }
  path: string
}) => {
  await defaultPage.page.route(
    'https://challenges.cloudflare.com/turnstile/v0/api.js',
    (route) =>
      route.fulfill({ body: TURNSTILE_SCRIPT, contentType: 'text/javascript' }),
  )
  await defaultPage.goto(path)
}

const waitForTurnstileToken = (page: Page) =>
  page.waitForFunction(
    () =>
      (globalThis as { isTurnstileTokenIssued?: boolean })
        .isTurnstileTokenIssued,
  )

const signIn = async ({ page, password }: { page: Page; password: string }) => {
  await waitForTurnstileToken(page)
  await page
    .getByRole('textbox', { name: 'Email or username' })
    .fill(TESTING_ACCOUNT_USERNAME)
  await page.getByRole('textbox', { name: 'Enter password' }).fill(password)
  await page.getByRole('button', { name: 'Sign in' }).click()
}

const registerUntilUsername = async (page: Page) => {
  await page.getByPlaceholder('Enter your email').fill('new@example.com')
  await page.getByRole('checkbox').check()
  await page.getByRole('button', { name: 'Continue' }).click()

  await waitForTurnstileToken(page)
  await page
    .getByPlaceholder('Password', { exact: true })
    .fill('a-long-and-unpredictable-passphrase')
  await page
    .getByPlaceholder('Confirm password')
    .fill('a-long-and-unpredictable-passphrase')
  await page.getByRole('button', { name: 'Save password' }).click()
}

appTest.describe('authentication', () => {
  appTest.skip(
    process.env.VIO_SERVER === 'static',
    'static builds have no server api',
  )

  appTest('signs in with correct credentials', async ({ defaultPage }) => {
    await goto({ defaultPage, path: '/session/create' })
    await signIn({ page: defaultPage.page, password: TESTING_ACCOUNT_PASSWORD })

    await expect(defaultPage.page).toHaveURL(/\/dashboard$/)
    await expect(
      defaultPage.page.getByRole('link', { name: 'Settings' }),
    ).toBeVisible()
    await expect(
      defaultPage.page.getByRole('button', { name: 'back', exact: true }),
    ).toHaveCount(0)
  })

  appTest(
    'keeps the back button for navigations before signing in',
    async ({ defaultPage, isMobile }) => {
      appTest.skip(
        isMobile,
        'the sidebar with the account link is desktop only',
      )

      await goto({ defaultPage, path: '/contact' })
      await defaultPage.page
        .getByRole('link', { name: 'Account', exact: true })
        .click()
      await signIn({
        page: defaultPage.page,
        password: TESTING_ACCOUNT_PASSWORD,
      })
      await expect(defaultPage.page).toHaveURL(/\/dashboard$/)

      await defaultPage.page
        .getByRole('button', { name: 'back', exact: true })
        .click()
      await expect(defaultPage.page).toHaveURL(/\/contact$/)
    },
  )

  appTest('opens the dashboard when signed in', async ({ defaultPage }) => {
    await goto({ defaultPage, path: '/session/create' })
    await signIn({ page: defaultPage.page, password: TESTING_ACCOUNT_PASSWORD })
    await expect(defaultPage.page).toHaveURL(/\/dashboard$/)

    // the pwa manifest's `start_url` carries `?source=pwa`
    for (const path of ['/', '/?source=pwa']) {
      const response = await defaultPage.page.request.get(path, {
        maxRedirects: 0,
      })

      expect(response.status()).toBe(302)
      expect(response.headers().location).toMatch(/\/dashboard$/)
    }
  })

  appTest('rejects incorrect credentials', async ({ defaultPage }) => {
    await goto({ defaultPage, path: '/session/create' })
    await signIn({ page: defaultPage.page, password: 'incorrect-password' })

    await expect(
      defaultPage.page.getByRole('button', { name: 'Back to Login' }),
    ).toBeVisible()
  })

  appTest('registers an account', async ({ defaultPage }) => {
    const { page } = defaultPage

    await goto({ defaultPage, path: '/account/create' })
    await registerUntilUsername(page)

    await page.getByPlaceholder('Username').fill('e2e-new-account')
    await page.getByRole('button', { name: 'Continue' }).click()

    await page.getByRole('button', { name: 'Pick a date' }).click()
    await page.getByRole('combobox', { name: 'Select year' }).click()
    await page.getByRole('option', { name: '1990' }).click()
    await page.getByRole('button', { name: /15, 1990$/ }).click()
    // the calendar popover stays open after picking a date and covers the button below
    await page.keyboard.press('Escape')
    await page.getByRole('button', { name: 'Confirm age' }).click()

    await expect(
      page.getByText('Check your inbox for a verification link'),
    ).toBeVisible()
  })

  appTest(
    'requests a password reset with a turnstile token',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await goto({ defaultPage, path: '/account/password/reset/request' })
      await waitForTurnstileToken(page)
      await page
        .getByRole('textbox', { name: 'Email address' })
        .fill('reset@example.com')

      const request = page.waitForRequest((request) =>
        Boolean(request.postData()?.includes('AccountPasswordResetRequest')),
      )
      await page.getByRole('button', { name: 'Send reset link' }).click()

      expect((await request).headers()['x-turnstile-key']).toBe(
        'XXXX.DUMMY.TOKEN.XXXX',
      )
      await expect(
        page.getByRole('heading', {
          level: 2,
          name: 'Check your inbox for a reset link',
        }),
      ).toBeVisible()
    },
  )

  appTest('rejects a taken username', async ({ defaultPage }) => {
    const { page } = defaultPage

    await goto({ defaultPage, path: '/account/create' })
    await registerUntilUsername(page)

    await page.getByPlaceholder('Username').fill(TESTING_ACCOUNT_USERNAME)
    await page.getByRole('button', { name: 'Continue' }).click()

    await expect(page.getByText('This username is already taken')).toBeVisible()
  })
})
