import type { useRuntimeConfig } from 'nuxt/app'

import { getIsSecure } from './networking'

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
