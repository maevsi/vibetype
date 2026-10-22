import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import {
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '#tests/e2e/utils/tests'

const PAGE_PATH = '/docs/legal/imprint'

testPageLoad(PAGE_PATH)
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
