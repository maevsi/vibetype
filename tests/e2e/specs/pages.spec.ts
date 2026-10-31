import { globSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import AxeBuilder from '@axe-core/playwright'
import { expect, type Page } from '@playwright/test'
import { HtmlValidate } from 'html-validate'

import { HTML_VALIDATE_CONFIG } from '#src/config/htmlValidate'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

// every page without dynamic segments, so that new pages are covered without a spec of their own
const PAGE_PATHS = globSync('**/*.vue', {
  cwd: fileURLToPath(new URL('../../../src/app/pages', import.meta.url)),
})
  .filter((file) => !file.includes('['))
  .map(
    (file) => `/${file.replace(/(^|\/)index\.vue$/, '').replace(/\.vue$/, '')}`,
  )

const PAGE_STATUSES: Record<string, number> = {
  '/account/password/reset': 400, // requires a reset code
  '/account/verify': 400, // requires a verification code
  '/event/ingest/url': process.env.VIO_SERVER === 'development' ? 200 : 404, // development only
  '/🫖': 418,
}

// uses the browser context's cookies, so that signed in requests carry the session
// redirect targets are checked on their own, external ones (e.g. app stores) not at all
const requestPage = async (page: Page, path: string) => {
  const response = await page.request.get(path, { maxRedirects: 0 })

  return {
    isRedirect: response.status() >= 300 && response.status() < 400,
    response,
  }
}

const htmlValidate = new HtmlValidate(HTML_VALIDATE_CONFIG)

for (const [name, test] of [
  ['signed out', appTest],
  ['signed in', authenticatedTest],
] as const) {
  test.describe(name, () => {
    test.describe('html validation', () => {
      for (const path of PAGE_PATHS) {
        test(path, async ({ defaultPage }) => {
          const { isRedirect, response } = await requestPage(
            defaultPage.page,
            path,
          )

          if (isRedirect) return

          expect(response.status()).toBe(PAGE_STATUSES[path] ?? 200)

          const report = await htmlValidate.validateString(
            await response.text(),
          )

          expect(
            report.results
              .flatMap((result) => result.messages)
              .map(
                (message) =>
                  `${message.ruleId}: ${message.message}\n(${message.selector})`,
              )
              .join('\n'),
          ).toEqual('')
        })
      }
    })

    // the color scheme only changes styles, so checking it once per page is enough
    for (const colorScheme of name === 'signed out'
      ? (['light', 'dark'] as const)
      : (['light'] as const)) {
      test.describe(`a11y ${colorScheme}`, () => {
        for (const path of PAGE_PATHS) {
          test(path, async ({ defaultPage }) => {
            const { isRedirect } = await requestPage(defaultPage.page, path)

            if (isRedirect) return

            await defaultPage.page.emulateMedia({ colorScheme })
            await defaultPage.goto(path)
            // client-side redirects (e.g. to the dashboard when signed in) must settle before scanning
            await defaultPage.page.waitForLoadState('networkidle')
            await expect(
              defaultPage.page.getByTestId('is-loading'),
            ).toHaveAttribute('data-is-loading', 'false')

            const { violations } = await new AxeBuilder({
              page: defaultPage.page,
            })
              .exclude('nuxt-devtools-frame') // only present on the development server
              .analyze()

            expect(
              violations
                .map(
                  (violation) =>
                    `${violation.id}: ${violation.help}\n${violation.nodes
                      .map((node) => `(${node.target})`)
                      .join('\n')}`,
                )
                .join('\n'),
            ).toEqual('')
          })
        }
      })
    }
  })
}
