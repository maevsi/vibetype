import { describe, expect, test } from 'vitest'

import { SITE_NAME, SITE_URL_TYPED } from '#src/node/static'
import { getServiceHref } from '#src/shared/utils/networking'

describe('getServiceHref', () => {
  test('isTesting takes priority and targets the test site for a service with a subdomain', () => {
    expect(getServiceHref({ isTesting: true, name: 'postgraphile' })).toBe(
      `${SITE_URL_TYPED.protocol}//postgraphile.${SITE_URL_TYPED.host}`,
    )
  })

  test('isTesting targets the test site itself without a subdomain prefix', () => {
    expect(getServiceHref({ isTesting: true, name: SITE_NAME })).toBe(
      `${SITE_URL_TYPED.protocol}//${SITE_URL_TYPED.host}`,
    )
  })

  test('stagingHost proxies a service with a public subdomain directly', () => {
    expect(
      getServiceHref({ name: 'postgraphile', stagingHost: 'vibetype.app' }),
    ).toBe('https://postgraphile.vibetype.app')
  })

  test("stagingHost proxies a service without a public subdomain through the app's own API route", () => {
    expect(
      getServiceHref({ name: 'reccoom', stagingHost: 'vibetype.app' }),
    ).toBe('https://vibetype.app/api/service/reccoom')
  })

  test('stagingHost never redirects the app itself, even though it has a subdomain entry', () => {
    expect(
      getServiceHref({
        host: 'app.localhost:3000',
        name: SITE_NAME,
        stagingHost: 'vibetype.app',
      }),
    ).toBe('https://app.localhost:3000')
  })

  test('server-side without stagingHost resolves the internal address', () => {
    expect(getServiceHref({ name: 'tusd' })).toBe('http://tusd:8080')
  })

  test("server-side without stagingHost resolves the app's own internal address too", () => {
    expect(getServiceHref({ name: SITE_NAME })).toBe('http://vibetype:3000')
  })

  test('allowInternal: false skips the internal address in favor of a public host', () => {
    expect(
      getServiceHref({
        allowInternal: false,
        host: 'vibetype.app',
        name: 'postgraphile',
      }),
    ).toBe('https://postgraphile.vibetype.app')
  })

  test('a public host cannot be built for a service without a subdomain', () => {
    expect(() =>
      getServiceHref({
        allowInternal: false,
        host: 'vibetype.app',
        name: 'reccoom',
      }),
    ).toThrowError('Service "reccoom" has no public subdomain!')
  })

  test('throws when no resolution strategy applies', () => {
    expect(() =>
      getServiceHref({ allowInternal: false, name: 'postgraphile' }),
    ).toThrowError('Could not get service href!')
  })
})
