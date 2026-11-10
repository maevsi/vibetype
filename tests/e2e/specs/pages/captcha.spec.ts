import { expect, type Page } from '@playwright/test'

import { TURNSTILE_HEADER_KEY } from '#src/shared/utils/constants'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

// The endpoints behind the forms are intercepted, so neither Zammad nor PostGraphile is needed.
// The Turnstile script is replaced as well, so a slow or rate limiting Cloudflare can't fail these tests; verification against Cloudflare's testing keys is covered by the server api specs.
const TURNSTILE_TOKEN = 'XXXX.DUMMY.TOKEN.XXXX'
const TURNSTILE_SCRIPT = `window.turnstile = {
  remove: () => {},
  render: (element, { callback }) => {
    callback(${JSON.stringify(TURNSTILE_TOKEN)})
    window.isTurnstileTokenIssued = true
    return 'widget'
  },
  reset: () => {},
}`

const fillSupportForm = async (page: Page) => {
  await page.locator('textarea[name="itemDescription"]').fill('description')
  await page.locator('input[name="userEmailAddress"]').fill('test@example.com')

  for (const checkbox of await page.getByRole('checkbox').all()) {
    await checkbox.check()
  }

  await page.getByRole('button', { name: 'Send' }).click()
}

const FORMS: {
  endpoint: string
  errorButton: string
  fill: (page: Page) => Promise<void>
  isAuthenticated?: boolean
  path: string
  prepare?: (page: Page) => Promise<void>
  successButton?: string
}[] = [
  ...['contact', 'idea', 'issue', 'report'].map((name) => ({
    endpoint: `/api/service/zammad/${name}`,
    errorButton: 'Back to the form',
    fill: fillSupportForm,
    path: `/support/${name}`,
    successButton: 'OK',
  })),
  {
    endpoint: '/api/service/zammad/early-bird',
    errorButton: 'Back to Form',
    fill: async (page) => {
      // the early bird inputs carry neither a name nor an accessible label
      await page.locator('input[type="text"]').fill('name')
      await page.locator('input[type="email"]').fill('test@example.com')
      await page.getByRole('checkbox').check()
      await page.getByRole('button', { name: 'Next' }).click()
    },
    isAuthenticated: true,
    path: '/early-bird/create',
    prepare: (page) => page.getByRole('button', { name: 'Join now!' }).click(),
    successButton: 'OK',
  },
  {
    // a successful login continues into account state that needs the backend, so only the request is checked
    endpoint: '/api/model/jwt',
    errorButton: 'Back to Login',
    fill: async (page) => {
      await page
        .getByRole('textbox', { name: 'Email or username' })
        .fill('username')
      await page
        .getByRole('textbox', { name: 'Enter password' })
        .fill('password')
      await page.getByRole('button', { name: 'Sign in' }).click()
    },
    path: '/session/create',
  },
]

const submit = async ({
  defaultPage,
  form,
}: {
  defaultPage: { goto: (url: string) => Promise<void>; page: Page }
  form: (typeof FORMS)[number]
}) => {
  const { page } = defaultPage

  await page.route(
    'https://challenges.cloudflare.com/turnstile/v0/api.js',
    (route) =>
      route.fulfill({ body: TURNSTILE_SCRIPT, contentType: 'text/javascript' }),
  )
  await defaultPage.goto(form.path)
  await form.prepare?.(page)
  // submitting before the widget issued its token fails the form's own validation
  await page.waitForFunction(
    () =>
      (globalThis as { isTurnstileTokenIssued?: boolean })
        .isTurnstileTokenIssued,
  )
  await form.fill(page)
}

appTest.describe('captcha', () => {
  appTest.skip(
    process.env.VIO_SERVER === 'static',
    'static builds have no server api',
  )

  for (const form of FORMS) {
    const test = form.isAuthenticated ? authenticatedTest : appTest

    test(`${form.path} sends the turnstile token`, async ({ defaultPage }) => {
      const tokens: (string | undefined)[] = []

      await defaultPage.page.route(form.endpoint, async (route) => {
        tokens.push(
          route.request().headers()[TURNSTILE_HEADER_KEY.toLowerCase()],
        )
        await (form.successButton
          ? route.fulfill({ status: 204 })
          : route.fulfill({ json: {}, status: 403 }))
      })

      await submit({ defaultPage, form })

      await expect.poll(() => tokens).toEqual([TURNSTILE_TOKEN])

      if (form.successButton) {
        await expect(
          defaultPage.page.getByRole('button', { name: form.successButton }),
        ).toBeVisible()
      }
    })

    test(`${form.path} shows an error on failed verification`, async ({
      defaultPage,
    }) => {
      await defaultPage.page.route(form.endpoint, (route) =>
        route.fulfill({
          json: { statusMessage: 'Turnstile verification unsuccessful' },
          status: 403,
        }),
      )

      await submit({ defaultPage, form })

      await expect(
        defaultPage.page.getByRole('button', { name: form.errorButton }),
      ).toBeVisible()
    })
  }
})
