import { testPageLoad, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/account/create'

testPageLoad(PAGE_PATH)
testVisualRegression(PAGE_PATH)
