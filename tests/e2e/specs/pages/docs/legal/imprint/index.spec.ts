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
