import { testPageLoad, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/api/test/service/vibetype/email'

testPageLoad(PAGE_PATH)
testVisualRegression(PAGE_PATH, true)
