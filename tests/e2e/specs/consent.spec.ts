import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { HYDRATION_TIMEOUT } from '#tests/e2e/utils/constants'

appTest.describe('consent screen', () => {
  appTest('locks the page underneath and scrolls itself', async ({ page }) => {
    await page.setViewportSize({ height: 300, width: 400 })
    await page.goto('/')

    const consentScreen = page.getByTestId('consent-screen')

    await expect(consentScreen).toBeVisible({ timeout: HYDRATION_TIMEOUT })
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden')

    await page.locator('body').evaluate((body) => {
      const spacer = body.ownerDocument.createElement('div')
      spacer.style.height = '5000px'
      body.append(spacer)
    })

    await page.mouse.move(10, 10)
    await page.mouse.wheel(0, 400)
    await page.keyboard.press('PageDown')
    await page.keyboard.press('End')
    await expect
      .poll(() => consentScreen.evaluate((e) => e.scrollTop))
      .toBe(
        await consentScreen.evaluate((e) => e.scrollHeight - e.clientHeight),
      )

    expect(await page.locator('html').evaluate((e) => e.scrollTop)).toBe(0)
    expect(
      await consentScreen.evaluate((e) => e.scrollHeight > e.clientHeight),
    ).toBe(true)
  })
  appTest('takes a choice by click', async ({ page }) => {
    await page.goto('/')

    const consentScreen = page.getByTestId('consent-screen')

    await expect(consentScreen).toBeVisible({ timeout: HYDRATION_TIMEOUT })
    await consentScreen.getByRole('button', { name: 'Only necessary' }).click()
    await expect(consentScreen).toBeHidden()
  })
})
