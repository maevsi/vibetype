import { describe, expect, test } from 'vitest'

import { SITE_NAME, SITE_URL_TYPED } from '#src/node/static'
import { getServiceHref } from '#src/shared/utils/networking'

describe('getServiceHref', () => {
  test('isTesting takes priority and targets the test site for a service with a subdomain', () => {
    expect(
      getServiceHref({ isServer: true, isTesting: true, name: 'postgraphile' }),
    ).toBe(`${SITE_URL_TYPED.protocol}//postgraphile.${SITE_URL_TYPED.host}`)
  })

  test('isTesting targets the test site itself without a subdomain prefix', () => {
    expect(
      getServiceHref({ isServer: true, isTesting: true, name: SITE_NAME }),
    ).toBe(`${SITE_URL_TYPED.protocol}//${SITE_URL_TYPED.host}`)
  })

  test('stagingHost proxies a service with a public subdomain directly', () => {
    expect(
      getServiceHref({
        isServer: true,
        name: 'postgraphile',
        stagingHost: 'vibetype.app',
      }),
    ).toBe('https://postgraphile.vibetype.app')
  })

  test("stagingHost proxies a service without a public subdomain through the app's own API route", () => {
    expect(
      getServiceHref({
        isServer: true,
        name: 'reccoom',
        stagingHost: 'vibetype.app',
      }),
    ).toBe('https://vibetype.app/api/service/reccoom')
  })

  test('stagingHost never redirects the app itself, even though it has a subdomain entry', () => {
    expect(
      getServiceHref({
        host: 'app.localhost:3000',
        isServer: true,
        name: SITE_NAME,
        stagingHost: 'vibetype.app',
      }),
    ).toBe('https://app.localhost:3000')
  })

  test('server-side without stagingHost resolves the internal address', () => {
    expect(getServiceHref({ isServer: true, name: 'tusd' })).toBe(
      'http://tusd:8080',
    )
  })

  test("server-side without stagingHost resolves the app's own internal address too", () => {
    expect(getServiceHref({ isServer: true, name: SITE_NAME })).toBe(
      'http://vibetype:3000',
    )
  })

  test('client-side never uses the internal address, even though allowInternal defaults to true', () => {
    expect(
      getServiceHref({
        host: 'vibetype.app',
        isServer: false,
        name: 'postgraphile',
      }),
    ).toBe('https://postgraphile.vibetype.app')
  })

  test('allowInternal: false skips the internal address in favor of a public host', () => {
    expect(
      getServiceHref({
        allowInternal: false,
        host: 'vibetype.app',
        isServer: true,
        name: 'postgraphile',
      }),
    ).toBe('https://postgraphile.vibetype.app')
  })

  test('a public host cannot be built for a service without a subdomain', () => {
    expect(() =>
      getServiceHref({
        allowInternal: false,
        host: 'vibetype.app',
        isServer: true,
        name: 'reccoom',
      }),
    ).toThrowError('Service "reccoom" has no public subdomain!')
  })

  test('throws when no resolution strategy applies server-side', () => {
    expect(() =>
      getServiceHref({
        allowInternal: false,
        isServer: true,
        name: 'postgraphile',
      }),
    ).toThrowError('Could not get service href!')
  })

  test('throws when no resolution strategy applies client-side', () => {
    expect(() =>
      getServiceHref({ isServer: false, name: 'postgraphile' }),
    ).toThrowError('Could not get service href!')
  })
})
