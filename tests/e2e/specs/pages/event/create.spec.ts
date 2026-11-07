import { expect } from '@playwright/test'

import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/event/create'

testVisualRegression(PAGE_PATH)

authenticatedTest.describe('file handling', () => {
  authenticatedTest(
    'prefills the form from a launched calendar file',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      // stands in for the browser, which hands an installed app the files it was opened with
      await page.addInitScript(() => {
        const ics = [
          'BEGIN:VCALENDAR',
          'BEGIN:VEVENT',
          'SUMMARY:Imported Meetup',
          'DTSTART:20300615T180000Z',
          'END:VEVENT',
          'END:VCALENDAR',
        ].join('\r\n')

        Object.defineProperty(globalThis, 'launchQueue', {
          value: {
            setConsumer: (consumer: (params: unknown) => unknown) =>
              consumer({
                files: [
                  {
                    getFile: async () =>
                      new File([ics], 'event.ics', { type: 'text/calendar' }),
                  },
                ],
              }),
          },
        })
      })

      await defaultPage.goto(PAGE_PATH)

      await expect(page.locator('#input-name')).toHaveValue('Imported Meetup')
    },
  )
})

authenticatedTest.describe('date and time picker', () => {
  authenticatedTest(
    'selects a start date and time',
    async ({ defaultPage }, testInfo) => {
      // Mobile layout is already covered by the visual regression test above;
      // on the short Mobile Chrome viewport, the popover's own internal
      // scroll container doesn't consistently respond to
      // `scrollIntoViewIfNeeded`, so this interaction test only needs to run
      // on desktop to verify the picker's behavior.
      authenticatedTest.skip(testInfo.project.name !== 'chromium')

      await defaultPage.goto(PAGE_PATH)

      const { page } = defaultPage
      const startTrigger = page.getByRole('button', {
        exact: true,
        name: 'Start',
      })
      const initialLabel = await startTrigger.innerText()

      await startTrigger.click()

      const todayCell = page.locator('[data-today]')
      await todayCell.scrollIntoViewIfNeeded()
      await todayCell.click()
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('Enter')

      const hourSegment = page.locator('[data-reka-time-field-segment="hour"]')
      await hourSegment.scrollIntoViewIfNeeded()
      await hourSegment.click()
      await page.keyboard.press('ArrowUp')

      const minuteSegment = page.locator(
        '[data-reka-time-field-segment="minute"]',
      )
      await minuteSegment.scrollIntoViewIfNeeded()
      await minuteSegment.click()
      await page.keyboard.press('ArrowUp')

      await page.keyboard.press('Escape')

      await expect(startTrigger).not.toHaveText(initialLabel)
    },
  )
})
