import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { PAGE_READY, TIMEOUT } from '#tests/e2e/utils/constants'
import {
  testMetadata,
  testOgImage,
  testVisualRegression,
} from '#tests/e2e/utils/tests'

const PAGE_PATH = '/'

testOgImage({
  dynamic: {
    de: '/de',
    en: PAGE_PATH,
  },
})
testVisualRegression(PAGE_PATH)

appTest.describe('page', () => {
  appTest('metadata', async ({ page }) => {
    await testMetadata({ page, path: '/', title: 'Vibetype' })
  })
})

appTest.describe('internationalization', () => {
  const textEnglish = 'Personal invitations. Proper feedback.'
  const textGerman = 'Persönliche Einladungen. Geordnetes Feedback.'

  appTest('displays English translations', async ({ defaultPage }) => {
    await defaultPage.goto('/')
    expect(defaultPage.page.getByText(textEnglish)).toBeDefined()
  })

  appTest('displays German translations', async ({ defaultPage }) => {
    await defaultPage.goto('/de')
    expect(defaultPage.page.getByText(textGerman)).toBeDefined()
  })

  appTest.describe('with a German browser', () => {
    appTest.use({ locale: 'de-DE' })

    appTest('redirects the root route to German', async ({ defaultPage }) => {
      await defaultPage.goto('/')
      await expect(defaultPage.page).toHaveURL(/\/de$/)
    })

    // the search engines' crawl of the deep links must stay free of language redirects
    appTest('leaves deep links untouched', async ({ defaultPage }) => {
      await defaultPage.goto('/session/create')
      await expect(defaultPage.page).toHaveURL(/\/session\/create$/)
    })
  })

  // appTest(
  //   'switches between English and German translations',
  //   async ({ defaultPage }) => {
  //     await defaultPage.goto('/')
  //     expect(defaultPage.page.getByText(textEnglish)).toBeDefined()

  //     await defaultPage.page.getByRole('link', { name: 'Deutsch' }).click()
  //     await defaultPage.page.waitForURL('/de')
  //     expect(defaultPage.page.getByText(textGerman)).toBeDefined()

  //     await defaultPage.page
  //       .getByRole('link', {
  //         name: 'English',
  //       })
  //       .click()
  //     await defaultPage.page.waitForURL('/')
  //     expect(defaultPage.page.getByText(textEnglish)).toBeDefined()
  //   },
  // )
})

appTest.describe('visual regression', () => {
  appTest('displays the privacy screen', async ({ page }) => {
    await page.goto('/')
    await PAGE_READY({ page })
    await expect(page).toHaveScreenshot({ timeout: TIMEOUT })
  })
})

authenticatedTest.describe('signed in', () => {
  authenticatedTest(
    'redirects a client side navigation to the dashboard without errors',
    async ({ defaultPage }) => {
      await defaultPage.goto('/account/view/e2e-missing-account')

      // vue reports a failing setup to the console rather than as a page error;
      // listening only from here skips the dev server's unrelated hydration mismatches
      const errors: string[] = []
      defaultPage.page.on('pageerror', (error) => errors.push(error.message))
      defaultPage.page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text())
      })

      // no page links the root for a signed-in account, so the app's router navigates there
      await defaultPage.page.locator('#__nuxt').evaluate((element) =>
        (
          element as typeof element & {
            __vue_app__: {
              config: {
                globalProperties: {
                  $router: { push: (path: string) => Promise<unknown> }
                }
              }
            }
          }
        ).__vue_app__.config.globalProperties.$router.push('/'),
      )

      await expect(defaultPage.page).toHaveURL(/\/dashboard$/)
      await expect(defaultPage.page).toHaveTitle(/^Dashboard · Vibetype$/)
      expect(errors).toEqual([])
    },
  )
})
