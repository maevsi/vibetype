import type { H3Event } from 'h3'

import { SITE_URL_TYPED } from '~~/node/static'

export const getHost = (event: H3Event) => {
  const host = event.node.req.headers.host

  if (!host) throw new Error('Host header is not given!')

  return host
}

export const getIsSecure = (
  options:
    | {
        runtimeConfig: ReturnType<typeof useRuntimeConfig>
      }
    | {
        siteUrl: URL
      },
) =>
  ('siteUrl' in options
    ? options.siteUrl.protocol
    : getSiteUrl(options.runtimeConfig.public.i18n.baseUrl).siteUrlTyped
        .protocol) === 'https:'

export const getServiceHref = ({
  host,
  isSsr = true,
  isTesting,
  name,
  port,
  stagingHost,
}: {
  host?: string
  isSsr?: boolean
  isTesting?: boolean
  name?: string
  port?: number
  stagingHost?: string
}) => {
  const nameSubdomain = name?.replaceAll('_', '-')
  const nameSubdomainString = nameSubdomain ? `${nameSubdomain}.` : ''
  const portString = port ? `:${port}` : ''

  if (isTesting) {
    return `${SITE_URL_TYPED.protocol}//${nameSubdomainString}${SITE_URL_TYPED.host}`
  }

  if (stagingHost) {
    return `https://${nameSubdomainString}${stagingHost}`
  }

  if (import.meta.server && isSsr) {
    return `http://${name}${portString}`
  }

  if (host) {
    return `https://${nameSubdomainString}${host}`
  }

  throw new Error('Could not get service href!')
}
