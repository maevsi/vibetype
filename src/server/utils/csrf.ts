import { hkdfSync } from 'node:crypto'

// repeats the HKDF parameters of nuxt's `deriveSecret`, which is async while nitro does not await plugins
// uncsrf takes the string's bytes as the AES-256 key, so it must be exactly 32 characters
export const getCsrfEncryptSecret = (appSecret: string) =>
  Buffer.from(
    hkdfSync('sha256', appSecret, 'nuxt', 'nuxt-csurf:encrypt', 24),
  ).toString('base64')
