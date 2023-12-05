import {
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '../../../utils/tests'

const PAGE_PATH = '/legal-notice'

testPageLoad(PAGE_PATH)
testOgImage(PAGE_PATH)
testVisualRegression(PAGE_PATH)
