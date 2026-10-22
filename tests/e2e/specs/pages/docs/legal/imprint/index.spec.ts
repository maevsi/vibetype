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
    de: 'a_VIBETYPEs+Logo.,c_Default.takumi,description_~RmluZGUgVmVyYW5zdGFsdHVuZ2VuLCBHw6RzdGUgdW5kIEZyZXVuZGUg8J-SmeKdpO-4j~Cfkpo,title_Impressum+von+VIBETYPE,p_Ii9kZS9kb2NzL2xlZ2FsL2ltcHJpbnQi,s_1WVpuMGt-F9PO3s1.png',
    en: `a_VIBETYPE's+logo.,c_Default.takumi,description_~RmluZCBldmVudHMsIGd1ZXN0cyBhbmQgZnJpZW5kcyDwn5KZ4p2k77iP8J-Smg,title_Imprint+of+VIBETYPE,p_Ii9kb2NzL2xlZ2FsL2ltcHJpbnQi,s_ZQAizbvqpHLGkC2i.png`,
  },
})
testVisualRegression(PAGE_PATH)

appTest.describe('internationalization', () => {
  appTest(
    'renders the English title into the open graph image',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      const ogImage = await defaultPage.page
        .locator('meta[property="og:image"]')
        .getAttribute('content')
      expect(ogImage).toContain('title_Imprint+of+VIBETYPE')
    },
  )

  appTest(
    'renders the German title into the open graph image',
    async ({ defaultPage }) => {
      await defaultPage.goto(`/de${PAGE_PATH}`)

      const ogImage = await defaultPage.page
        .locator('meta[property="og:image"]')
        .getAttribute('content')
      expect(ogImage).toContain('title_Impressum+von+VIBETYPE')
    },
  )
})
