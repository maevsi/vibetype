import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { TIMEOUT } from '#tests/e2e/utils/constants'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}/guest`

testVisualRegression(PAGE_PATH, undefined, { test: authenticatedTest })

authenticatedTest.describe('contact group filter', () => {
  authenticatedTest(
    'including and excluding groups narrows the contacts',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)
      await defaultPage.page
        .getByRole('button', { name: 'Add guests' })
        .first()
        .click()

      const contactNames = ['Ada Lovelace', 'Grace Hopper', 'Linus Pauling']

      for (const contactName of contactNames) {
        await expect(defaultPage.page.getByText(contactName)).toBeVisible({
          timeout: TIMEOUT,
        })
      }

      await defaultPage.page
        .getByRole('button', { name: 'Colleagues, not filtered' })
        .click()

      await expect(defaultPage.page.getByText('Linus Pauling')).toBeHidden()

      await defaultPage.page
        .getByRole('button', { name: 'University, not filtered' })
        .click()
      await defaultPage.page
        .getByRole('button', { name: 'University, included' })
        .click()

      await expect(defaultPage.page.getByText('Ada Lovelace')).toBeVisible()
      await expect(defaultPage.page.getByText('Grace Hopper')).toBeHidden()
      await expect(defaultPage.page.getByText('Linus Pauling')).toBeHidden()
    },
  )
})
