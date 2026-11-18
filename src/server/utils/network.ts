import { lookup } from 'node:dns/promises'
import { BlockList, isIP } from 'node:net'

import { createAppError } from './error'

const nonPublicAddresses = new BlockList()

for (const [network, prefix] of [
  ['0.0.0.0', 8],
  ['10.0.0.0', 8],
  ['100.64.0.0', 10],
  ['127.0.0.0', 8],
  ['169.254.0.0', 16],
  ['172.16.0.0', 12],
  ['192.0.0.0', 24],
  ['192.0.2.0', 24],
  ['192.168.0.0', 16],
  ['198.18.0.0', 15],
  ['198.51.100.0', 24],
  ['203.0.113.0', 24],
  ['224.0.0.0', 3],
] as const)
  nonPublicAddresses.addSubnet(network, prefix, 'ipv4')

for (const [network, prefix] of [
  ['::', 128],
  ['::1', 128],
  ['64:ff9b:1::', 48],
  ['100::', 64],
  ['2001:db8::', 32],
  ['fc00::', 7],
  ['fe80::', 10],
  ['ff00::', 8],
] as const)
  nonPublicAddresses.addSubnet(network, prefix, 'ipv6')

const ipv4MappedPrefix = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/i

export const isPublicAddress = (address: string) => {
  const unmappedAddress = ipv4MappedPrefix.exec(address)?.[1] ?? address
  const family = isIP(unmappedAddress)

  if (family === 0) return false

  return !nonPublicAddresses.check(
    unmappedAddress,
    family === 4 ? 'ipv4' : 'ipv6',
  )
}

// The host is resolved again when connecting, so a DNS rebinding attacker can still answer differently the second time.
export const requirePublicUrl = async (url: string) => {
  const { hostname, protocol } = new URL(url)

  if (protocol !== 'http:' && protocol !== 'https:')
    throw createAppError({
      status: 400,
      statusText: 'The URL must use http or https.',
    })

  // brackets around IPv6 literals are not part of the address
  const host = hostname.replace(/^\[|\]$/g, '')
  const addresses = await lookup(host, { all: true }).catch(() => {
    throw createAppError({
      status: 400,
      statusText: 'The URL host cannot be resolved.',
    })
  })

  if (!addresses.every(({ address }) => isPublicAddress(address)))
    throw createAppError({
      status: 400,
      statusText: 'The URL must not point to a non-public address.',
    })
}
