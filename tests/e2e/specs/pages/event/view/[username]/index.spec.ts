import { TESTING_ACCOUNT_USERNAME } from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}`

appTest.describe('with data', () => {
  testVisualRegression(PAGE_PATH)
})
