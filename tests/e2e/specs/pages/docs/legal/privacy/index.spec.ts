import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import {
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '#tests/e2e/utils/tests'

const PAGE_PATH = '/docs/legal/privacy'

testPageLoad(PAGE_PATH)
testOgImage({
  dynamic: {
    de: '/de/docs/legal/privacy',
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
      expect(ogImage?.replaceAll('%2B', '+')).toContain('title_Privacy+Policy')
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
        'title_~RGF0ZW5zY2h1dHplcmtsw6RydW5n',
      )
    },
  )
})
