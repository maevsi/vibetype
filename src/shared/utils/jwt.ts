import type { useRuntimeConfig } from 'nuxt/app'

import { getIsSecure } from './networking' // TODO: remove import once shared namespace has proper auto-imports (https://github.com/nuxt/nuxt/issues/32714)

export const getJwtName = (siteUrl: URL) =>
  `${getIsSecure({ siteUrl }) ? '__Host-' : ''}jwt-v3`

export const getJwtPublicKey = async ({
  runtimeConfig,
}: {
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
}) => {
  if (runtimeConfig.public.vio.stagingHost) {
    return await $fetch<string>(
      `https://${runtimeConfig.public.vio.stagingHost}/api/service/postgraphile/jwt-public-key`,
    )
  }

  return runtimeConfig.public.vio.auth.jwt.publicKey
}
