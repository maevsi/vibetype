import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { SITE_NAME, SITE_URL_TYPED } from '#src/node/static'
import {
  getFetchRetryingRateLimit,
  getIsSitePath,
  getServiceHref,
} from '#src/shared/utils/networking'

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

  test('isTesting prefers the request host over the build-time site url', () => {
    expect(
      getServiceHref({
        host: 'app.localhost:3001',
        isTesting: true,
        name: SITE_NAME,
      }),
    ).toBe(`${SITE_URL_TYPED.protocol}//app.localhost:3001`)
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

describe('getIsSitePath', () => {
  test('accepts paths on this site', () => {
    expect(getIsSitePath('/')).toBe(true)
    expect(getIsSitePath('/event/view/username/slug?ic=code')).toBe(true)
  })

  test('rejects targets that lead to other sites', () => {
    expect(getIsSitePath('//example.com')).toBe(false)
    expect(getIsSitePath('/\\example.com')).toBe(false)
    expect(getIsSitePath('https://example.com')).toBe(false)
    expect(getIsSitePath('javascript:alert(1)')).toBe(false)
  })
})

describe('getFetchRetryingRateLimit', () => {
  const tooManyRequests = (headers?: Record<string, string>) =>
    new Response(null, { headers, status: 429 })

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2030-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  test('retries after the seconds given by Retry-After', async () => {
    const stub = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(tooManyRequests({ 'Retry-After': '2' }))
      .mockResolvedValueOnce(new Response('ok'))
    const promise = getFetchRetryingRateLimit(stub)('https://example.test')

    await vi.advanceTimersByTimeAsync(1999)
    expect(stub).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(stub).toHaveBeenCalledTimes(2)
    expect((await promise).status).toBe(200)
  })

  test('retries after the HTTP date given by Retry-After', async () => {
    const stub = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        tooManyRequests({ 'Retry-After': 'Tue, 01 Jan 2030 00:00:03 GMT' }),
      )
      .mockResolvedValueOnce(new Response('ok'))
    const promise = getFetchRetryingRateLimit(stub)('https://example.test')

    await vi.advanceTimersByTimeAsync(2999)
    expect(stub).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(stub).toHaveBeenCalledTimes(2)
    expect((await promise).status).toBe(200)
  })

  test('clamps a long Retry-After', async () => {
    const stub = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(tooManyRequests({ 'Retry-After': '3600' }))
      .mockResolvedValueOnce(new Response('ok'))
    const promise = getFetchRetryingRateLimit(stub)('https://example.test')

    await vi.advanceTimersByTimeAsync(10_000)
    expect((await promise).status).toBe(200)
  })

  test('backs off with an increasing delay without Retry-After', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    const stub = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(tooManyRequests())
      .mockResolvedValueOnce(tooManyRequests())
      .mockResolvedValueOnce(new Response('ok'))
    const promise = getFetchRetryingRateLimit(stub)('https://example.test')

    await vi.advanceTimersByTimeAsync(500)
    expect(stub).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(999)
    expect(stub).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(1)
    expect(stub).toHaveBeenCalledTimes(3)
    expect((await promise).status).toBe(200)
  })

  test('gives up after three retries and returns the last 429', async () => {
    const last = tooManyRequests()
    const stub = vi
      .fn<typeof fetch>()
      .mockImplementationOnce(async () => tooManyRequests())
      .mockImplementationOnce(async () => tooManyRequests())
      .mockImplementationOnce(async () => tooManyRequests())
      .mockResolvedValueOnce(last)
    const promise = getFetchRetryingRateLimit(stub)('https://example.test')

    await vi.advanceTimersByTimeAsync(60_000)
    expect(await promise).toBe(last)
    expect(stub).toHaveBeenCalledTimes(4)
  })

  test.each([200, 500])('passes %i straight through', async (status) => {
    const response = new Response(null, { status })
    const stub = vi.fn<typeof fetch>().mockResolvedValue(response)

    expect(await getFetchRetryingRateLimit(stub)('https://example.test')).toBe(
      response,
    )
    expect(stub).toHaveBeenCalledTimes(1)
  })

  test('stops waiting when the request is aborted', async () => {
    const stub = vi
      .fn<typeof fetch>()
      .mockResolvedValue(tooManyRequests({ 'Retry-After': '5' }))
    const controller = new AbortController()
    const promise = getFetchRetryingRateLimit(stub)('https://example.test', {
      signal: controller.signal,
    })
    const assertion = expect(promise).rejects.toMatchObject({
      name: 'AbortError',
    })

    await vi.advanceTimersByTimeAsync(1000)
    controller.abort()
    await assertion
    await vi.advanceTimersByTimeAsync(10_000)
    expect(stub).toHaveBeenCalledTimes(1)
  })
})
