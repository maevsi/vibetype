import { globSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import { expect } from '@playwright/test'
import { HtmlValidate } from 'html-validate'

import { HTML_VALIDATE_CONFIG } from '#src/config/htmlValidate'
import { TESTING_COOKIE_NAME } from '#src/node/static'
import { appTest } from '#tests/e2e/fixtures/appTest'

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

const htmlValidate = new HtmlValidate(HTML_VALIDATE_CONFIG)

appTest.describe('html validation', () => {
  for (const path of PAGE_PATHS) {
    appTest(path, async ({ request }) => {
      const response = await request.get(path, {
        headers: { Cookie: `${TESTING_COOKIE_NAME}=true` },
        // redirect targets are validated on their own, external ones (e.g. app stores) not at all
        maxRedirects: 0,
      })

      if (response.status() >= 300 && response.status() < 400) return

      expect(response.status()).toBe(PAGE_STATUSES[path] ?? 200)

      const report = await htmlValidate.validateString(await response.text())

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
