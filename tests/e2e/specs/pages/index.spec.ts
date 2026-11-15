import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
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
  appTest('displays the cookie banner', async ({ page }) => {
    await page.goto('/')
    await PAGE_READY({ page, options: { cookieControl: false } })
    await expect(page).toHaveScreenshot({ timeout: TIMEOUT })
  })
})
