import { parseSetCookie } from 'cookie-es'
import type { H3Event } from 'h3'

import { SITE_NAME, SITE_URL_TYPED } from '~~/node/static'

export const getHost = (event: H3Event) => {
  const host = event.node.req.headers.host

  if (!host) throw new Error('Host header is not given!')

  return host
}

export { getIsSecure } from '~~/node/static'

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
  const nameSubdomain =
    name !== SITE_NAME ? name?.replaceAll('_', '-') : undefined
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

export const getResponseCookie = ({
  name,
  requestEvent,
}: {
  name: string
  requestEvent?: H3Event
}) => {
  // if csrf cookie is not available already, it can only be available in a server response, not client side
  if (!requestEvent) {
    throw new Error('Request event is not available.')
  }

  // get csrf cookie value from the response's `set-cookie` header
  const setCookieHeader = requestEvent.node.res.getHeader('set-cookie')
  const setCookieHeaderArray = Array.isArray(setCookieHeader)
    ? setCookieHeader
    : typeof setCookieHeader === 'string'
      ? [setCookieHeader]
      : []
  const cookieMatches = setCookieHeaderArray
    .map((header) => parseSetCookie(header))
    .filter((header) => header.name === name)
  return cookieMatches[0]
}
