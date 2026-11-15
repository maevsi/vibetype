import type { DevicePlatform } from '~~/gql/generated/graphql'

// The order matters: most user agents name several browsers, and the most specific name comes first.
const DEVICE_BROWSERS: [string, RegExp][] = [
  ['Edge', /\bEdg(?:e|A|iOS)?\//],
  ['Opera', /\bOPR\/|\bOpera\b/],
  ['Samsung Internet', /\bSamsungBrowser\//],
  ['Firefox', /\b(?:Firefox|FxiOS)\//],
  ['Chrome', /\b(?:Chrome|CriOS)\//],
  ['Safari', /\bSafari\//],
]

// Android and iOS user agents also name Linux and macOS, so they come first.
const DEVICE_SYSTEMS: [string, RegExp][] = [
  ['Android', /\bAndroid\b/],
  ['iPhone', /\biPhone\b/],
  ['iPad', /\biPad\b/],
  ['ChromeOS', /\bCrOS\b/],
  ['Windows', /\bWindows\b/],
  ['macOS', /\bMacintosh\b|\bMac OS X\b/],
  ['Linux', /\bLinux\b|\bX11\b/],
]

export const getDeviceLabel = (userAgent: string | undefined) => {
  if (!userAgent) return undefined

  const browser = DEVICE_BROWSERS.find(([, pattern]) =>
    pattern.test(userAgent),
  )?.[0]
  const system = DEVICE_SYSTEMS.find(([, pattern]) =>
    pattern.test(userAgent),
  )?.[0]

  if (browser && system) return `${browser} on ${system}`

  return browser ?? system
}

export const getDevicePlatform = ({
  hasPushCapability,
  isAndroid,
}: {
  hasPushCapability: boolean
  isAndroid?: boolean
}): DevicePlatform => {
  if (hasPushCapability) return 'ios'
  if (isAndroid) return 'android'

  return 'web'
}
