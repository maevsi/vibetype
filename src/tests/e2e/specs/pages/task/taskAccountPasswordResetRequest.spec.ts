import { testPageLoad, testVisualRegression } from '../../../utils/tests'

const PAGE_PATH = '/account/password/reset/request'

testPageLoad(PAGE_PATH)
testVisualRegression(PAGE_PATH)
