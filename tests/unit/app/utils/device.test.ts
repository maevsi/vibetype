import { describe, expect, test } from 'vitest'

import { getDeviceLabel, getDevicePlatform } from '#src/app/utils/device'

describe('getDeviceLabel', () => {
  test.each([
    [
      'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
      'Firefox on Linux',
    ],
    [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
      'Safari on iPhone',
    ],
    [
      'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
      'Chrome on Android',
    ],
    [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0',
      'Edge on Windows',
    ],
    [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15',
      'Safari on macOS',
    ],
    [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/126.0.0.0 Mobile/15E148 Safari/604.1',
      'Chrome on iPhone',
    ],
    [
      'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36',
      'Samsung Internet on Android',
    ],
    [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 OPR/112.0.0.0',
      'Opera on Windows',
    ],
  ])('names %s', (userAgent, expected) => {
    expect(getDeviceLabel(userAgent)).toBe(expected)
  })

  test('names the system of an app shell without a browser', () => {
    expect(
      getDeviceLabel(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
      ),
    ).toBe('iPhone')
  })

  test('falls back to undefined', () => {
    expect(getDeviceLabel(undefined)).toBeUndefined()
    expect(getDeviceLabel('')).toBeUndefined()
    expect(getDeviceLabel('curl/8.0')).toBeUndefined()
  })
})

describe('getDevicePlatform', () => {
  test('prefers the iOS shell', () => {
    expect(
      getDevicePlatform({ hasPushCapability: true, isAndroid: true }),
    ).toBe('ios')
  })

  test('detects the Android app', () => {
    expect(
      getDevicePlatform({ hasPushCapability: false, isAndroid: true }),
    ).toBe('android')
  })

  test('falls back to web', () => {
    expect(getDevicePlatform({ hasPushCapability: false })).toBe('web')
    expect(
      getDevicePlatform({ hasPushCapability: false, isAndroid: false }),
    ).toBe('web')
  })
})
