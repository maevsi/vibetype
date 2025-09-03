import { test, expect } from '@playwright/test'

test('login with valid credentials', async ({ page }) => {
  await page.goto('/session/create')

  const emailInput = page.locator('#vibetype-dev-input-email-address')
  await emailInput.waitFor({ state: 'visible', timeout: 30000 })

  const cookieAcceptButton = page
    .getByRole('button', {
      name: /accept/i,
    })
    .first()
  if (await cookieAcceptButton.isVisible({ timeout: 2000 })) {
    await cookieAcceptButton.click()
  }

  const passwordInput = page.locator('#vibetype-dev-input-password')

  await emailInput.fill('mail+sqitch-1@maev.si')
  await passwordInput.fill('password')

  const submitButton = page.getByRole('button', {
    name: /log in/i,
  })
  await expect(submitButton).toBeVisible()

  await submitButton.click()

  await page.waitForTimeout(5000)

  const currentUrl = page.url()
  expect(currentUrl).toContain('/session/create')
})

test('login with incorrect credentials', async ({ page }) => {
  await page.goto('/session/create')

  const emailInput = page.locator('#vibetype-dev-input-email-address')
  await emailInput.waitFor({ state: 'visible', timeout: 30000 })

  const cookieAcceptButton = page
    .getByRole('button', {
      name: /accept/i,
    })
    .first()
  if (await cookieAcceptButton.isVisible({ timeout: 2000 })) {
    await cookieAcceptButton.click()
  }

  const passwordInput = page.locator('#vibetype-dev-input-password')

  await emailInput.fill('wrong@example.com')
  await passwordInput.fill('wrongpassword')

  const submitButton = page.getByRole('button', {
    name: /log in/i,
  })
  await expect(submitButton).toBeVisible()

  await submitButton.click()

  await page.waitForTimeout(5000)

  const currentUrl = page.url()
  expect(currentUrl).toContain('/session/create')
})
