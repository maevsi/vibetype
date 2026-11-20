import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/contact/import'

testVisualRegression(PAGE_PATH, false, { test: authenticatedTest })
