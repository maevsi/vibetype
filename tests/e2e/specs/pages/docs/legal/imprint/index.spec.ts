import { expect } from '@playwright/test'

import { I18N_COOKIE_NAME } from '#src/node/static'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { SITE_URL } from '#tests/e2e/utils/constants'
import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/docs/legal/imprint'

testOgImage({
  dynamic: {
    de: '/de/docs/legal/imprint',
    en: PAGE_PATH,
  },
})
testVisualRegression(PAGE_PATH)

appTest.describe('internationalization', () => {
  // the plus that stands for a space is percent-encoded as %2B
  appTest(
    'renders the English title into the open graph image',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      const ogImage = await defaultPage.page
        .locator('meta[property="og:image"]')
        .getAttribute('content')
      expect(ogImage?.replaceAll('%2B', '+')).toContain(
        'title_Imprint+of+VIBETYPE',
      )
    },
  )

  appTest(
    'renders the German title into the open graph image',
    async ({ defaultPage }) => {
      await defaultPage.goto(`/de${PAGE_PATH}`)

      const ogImage = await defaultPage.page
        .locator('meta[property="og:image"]')
        .getAttribute('content')
      expect(ogImage?.replaceAll('%2B', '+')).toContain(
        'title_Impressum+von+VIBETYPE',
      )
    },
  )
})

const MARKED_PAGE_PATH = `${PAGE_PATH}?language=auto`

appTest.describe('browser language detection on marked links', () => {
  appTest.use({ locale: 'en-US' })

  appTest(
    'keeps the english page for the english browser and drops the mark',
    async ({ defaultPage, page }) => {
      await defaultPage.goto(MARKED_PAGE_PATH)

      expect(page.url()).toBe(`${SITE_URL}${PAGE_PATH}`)
    },
  )

  appTest(
    'prefers the stored language over the browser language',
    async ({ context, defaultPage, page }) => {
      await context.addCookies([
        {
          name: I18N_COOKIE_NAME,
          url: SITE_URL,
          value: 'de',
        },
      ])
      await defaultPage.goto(MARKED_PAGE_PATH)

      expect(page.url()).toBe(`${SITE_URL}/de${PAGE_PATH}`)
    },
  )
})

appTest.describe('browser language detection for a german browser', () => {
  appTest.use({ locale: 'de-DE' })

  appTest(
    'redirects the marked link to the german page',
    async ({ context, defaultPage, page }) => {
      await defaultPage.goto(MARKED_PAGE_PATH)

      expect(page.url()).toBe(`${SITE_URL}/de${PAGE_PATH}`)
      const cookies = (await context.cookies()).map(
        (cookie) => `${cookie.name}=${cookie.value}`,
      )
      expect(cookies).toContain(`${I18N_COOKIE_NAME}=de`)
    },
  )

  appTest(
    'keeps an unmarked link in the language of its url',
    async ({ defaultPage, page }) => {
      await defaultPage.goto(PAGE_PATH)

      expect(page.url()).toBe(`${SITE_URL}${PAGE_PATH}`)
    },
  )
})
