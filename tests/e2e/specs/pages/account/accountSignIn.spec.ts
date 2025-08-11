import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'
import { PAGE_READY, TIMEOUT } from '#tests/e2e/utils/constants'
import { testA11y, testPageLoad } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/account/sign-in'

testA11y(PAGE_PATH)
testPageLoad(PAGE_PATH)

appTest.describe('account sign-in page', () => {
  appTest('should display sign-in form', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)
    await expect(
      defaultPage.page.getByRole('heading', { name: 'Sign in' })
    ).toBeVisible()
    await expect(defaultPage.page.getByLabel('Email address')).toBeVisible()
    await expect(defaultPage.page.getByLabel('Password')).toBeVisible()
    await expect(
      defaultPage.page.getByRole('button', { name: 'Log in' })
    ).toBeVisible()
  })

  appTest('should navigate to register page', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)
    await defaultPage.page
      .getByRole('link', { name: 'Create an account' })
      .click()
    await expect(defaultPage.page).toHaveURL('/account/create')
  })

  appTest('should navigate to password reset page', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)
    await defaultPage.page
      .getByRole('link', { name: 'I forgot my password' })
      .click()
    await expect(defaultPage.page).toHaveURL('/account/password-reset-request')
  })
})

appTest.describe('sign-in flow', () => {
  appTest(
    'should successfully sign in with valid credentials',
    async ({ defaultPage }) => {
      await defaultPage.goto('/')

      await defaultPage.page.getByRole('link', { name: 'Log in' }).click()
      await expect(defaultPage.page).toHaveURL(PAGE_PATH)

      await defaultPage.page
        .getByLabel('Email address')
        .fill('mail+sqitch-1@maev.si')
      await defaultPage.page.getByLabel('Password').fill('password')

      await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

      await expect(defaultPage.page).toHaveURL('/dashboard')
    }
  )

  appTest(
    'should show error with invalid credentials',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      await defaultPage.page
        .getByLabel('Email address')
        .fill('invalid@example.com')
      await defaultPage.page.getByLabel('Password').fill('wrongpassword')

      await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

      await expect(
        defaultPage.page.getByText('Login failed! Have you registered yet?')
      ).toBeVisible()
    }
  )

  appTest('should show error with empty fields', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)

    await defaultPage.page.getByRole('button', { name: 'Log in' }).click()

    await expect(
      defaultPage.page.getByText('This field is required')
    ).toBeVisible()
  })
})

appTest.describe('visual regression', () => {
  appTest('sign-in form looks correct', async ({ page }) => {
    await page.goto(PAGE_PATH)
    await PAGE_READY({ page })
    await expect(page).toHaveScreenshot({ timeout: TIMEOUT })
  })
})
