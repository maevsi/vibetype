import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/%F0%9F%AB%96'

testOgImage({
  dynamic: {
    de: '/de/%F0%9F%AB%96',
    en: PAGE_PATH,
  },
})
testVisualRegression(PAGE_PATH)
