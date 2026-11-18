import { expect } from '@playwright/test'

import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const PAGE_PATH = '/event/ingest/image'
const ROUTE = '**/api/model/event/ingest/image'
// a single transparent pixel
const IMAGE_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
  'base64',
)

authenticatedTest.describe('poster reading', () => {
  authenticatedTest(
    'prefills the event form from a poster',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await page.route(ROUTE, (route) =>
        route.fulfill({
          json: {
            output: {
              description: 'Desc',
              is_event: true,
              location: 'Kassel',
              name: 'Test',
              start: '2026-12-24T18:00:00',
            },
          },
        }),
      )
      await defaultPage.goto(PAGE_PATH)
      await page.locator('input[type="file"]:not([capture])').setInputFiles({
        buffer: IMAGE_PNG,
        mimeType: 'image/png',
        name: 'poster.png',
      })
      await page.getByRole('button', { name: 'Read poster' }).click()

      await expect(page).toHaveURL(/\/event\/create$/)
      await expect(page.locator('#input-name')).toHaveValue('Test')
    },
  )

  authenticatedTest(
    'tells when the photo shows no event',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await page.route(ROUTE, (route) =>
        route.fulfill({
          json: { output: { description: '', is_event: false } },
        }),
      )
      await defaultPage.goto(PAGE_PATH)
      await page.locator('input[type="file"]:not([capture])').setInputFiles({
        buffer: IMAGE_PNG,
        mimeType: 'image/png',
        name: 'poster.png',
      })
      await page.getByRole('button', { name: 'Read poster' }).click()

      await expect(page.getByText('No event found on this photo')).toBeVisible()
      await expect(page).toHaveURL(new RegExp(`${PAGE_PATH}$`))
    },
  )
})
