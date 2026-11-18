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
      let csrfToken: string | undefined

      await page.route(ROUTE, (route) => {
        // the mock bypasses the server's CSRF check, which rejects requests without this header
        csrfToken = route.request().headers()['x-csrf-token']

        return route.fulfill({
          json: {
            output: {
              description: 'Desc',
              is_event: true,
              location: 'Kassel',
              name: 'Test',
              start: '2026-12-24T18:00:00',
            },
          },
        })
      })
      await defaultPage.goto(PAGE_PATH)
      await page.locator('input[type="file"]:not([capture])').setInputFiles({
        buffer: IMAGE_PNG,
        mimeType: 'image/png',
        name: 'poster.png',
      })
      await page.getByRole('button', { name: 'Read poster' }).click()

      await expect(page).toHaveURL(/\/event\/create$/)
      await expect(page.locator('#input-name')).toHaveValue('Test')
      expect(csrfToken).toBeTruthy()
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

  authenticatedTest(
    'reads posters handed over by the iOS app',
    async ({ defaultPage }) => {
      const { page } = defaultPage
      const base64Images: string[] = []

      // stands in for the app, which answers the scan and the shared poster request with the image as a data url
      await page.addInitScript(`
        const answerWith = (eventName) => ({
          postMessage: () =>
            window.dispatchEvent(new CustomEvent(eventName, { detail: ${JSON.stringify(`data:image/png;base64,${IMAGE_PNG.toString('base64')}`)} })),
        })

        window.webkit = {
          messageHandlers: {
            'poster-scan': answerWith('poster-scan-result'),
            'poster-shared-request': answerWith('poster-shared'),
          },
        }
      `)
      await page.route(ROUTE, (route) => {
        base64Images.push(route.request().postDataJSON().base64Image)

        return route.fulfill({
          json: { output: { description: '', is_event: false } },
        })
      })
      await defaultPage.goto(PAGE_PATH)

      // the shared poster arrives on its own once the page is mounted
      await page.getByRole('button', { name: 'Read poster' }).click()
      await expect(page.getByText('No event found on this photo')).toBeVisible()

      await page.getByRole('button', { name: 'Take photo' }).click()
      await page.getByRole('button', { name: 'Read poster' }).click()
      await expect.poll(() => base64Images.length).toBe(2)

      expect(base64Images).toEqual([
        IMAGE_PNG.toString('base64'),
        IMAGE_PNG.toString('base64'),
      ])
    },
  )
})
