import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { SITE_URL } from '#tests/e2e/utils/constants'

const getOpenPath = (url: string) => `/open?url=${encodeURIComponent(url)}`

appTest.describe('protocol handling', () => {
  appTest('opens the linked path', async ({ page }) => {
    await page.goto(getOpenPath('web+vibetype://event'))

    await expect(page).toHaveURL(`${SITE_URL}/event`)
  })

  for (const url of [
    'web+vibetype:////event',
    'web+vibetype:\t//event',
    'web+vibetype:/\t/event',
  ])
    appTest(
      `stays within the app for ${JSON.stringify(url)}`,
      async ({ page }) => {
        await page.goto(getOpenPath(url))

        await expect(page).toHaveURL(`${SITE_URL}/event`)
      },
    )
})
