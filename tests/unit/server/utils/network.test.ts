import { expect, test } from 'vitest'

import { isPublicAddress } from '#src/server/utils/network'

test.each([
  '0.0.0.0',
  '10.0.0.1',
  '100.64.0.1',
  '127.0.0.1',
  '169.254.169.254',
  '172.16.0.1',
  '192.168.0.1',
  '224.0.0.1',
  '255.255.255.255',
  '::',
  '::1',
  '::ffff:127.0.0.1',
  'fd00::1',
  'fe80::1',
  'ff02::1',
  'not an address',
])('rejects %s', (address) => {
  expect(isPublicAddress(address)).toBe(false)
})

test.each(['93.184.216.34', '2606:2800:220:1::', '::ffff:93.184.216.34'])(
  'accepts %s',
  (address) => {
    expect(isPublicAddress(address)).toBe(true)
  },
)
