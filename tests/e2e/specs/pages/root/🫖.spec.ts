import {
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '#tests/e2e/utils/tests'

const PAGE_PATH = '/%F0%9F%AB%96'

testOgImage(PAGE_PATH)
testPageLoad(PAGE_PATH, 418)
testVisualRegression(PAGE_PATH)
