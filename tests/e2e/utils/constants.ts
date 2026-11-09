import { expect } from '@playwright/test'
import type { Page } from 'playwright-core'

export const COOKIE_CONTROL_CONSENT_COOKIE_DEFAULT_VALUE = 'acstlccfga'
export const TIMEOUT = 60000
// hydration regularly takes longer than the default 5 second expect timeout on the dev server or a busy runner; stays below the 30 second test timeout so a page that never hydrates still fails here
export const HYDRATION_TIMEOUT = 20000
export const TIMEZONE_DEFAULT = 'Europe/Berlin'
export const PAGE_READY = async ({
  page,
  options,
}: {
  page: Page
  options?: {
    cookieControl?: boolean
    devTools?: boolean
    isLoading?: boolean
  }
}) => {
  if (!options || options.cookieControl !== false) {
    await expect(
      page.getByRole('button', { name: 'Cookie control' }),
    ).toBeVisible()
  }

  if (!options || options.isLoading !== false) {
    await expect(page.getByTestId('is-loading')).toHaveAttribute(
      'data-is-loading',
      'false',
      { timeout: HYDRATION_TIMEOUT },
    )
  }
}
export const SITE_URL =
  process.env.NUXT_PUBLIC_I18N_BASE_URL ||
  `https://${process.env.HOST || 'app.localhost'}:${process.env.PORT || '3000'}`
