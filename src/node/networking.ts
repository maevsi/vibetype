import { parseSetCookie } from 'cookie-es'
import type { H3Event } from 'h3'

import { SITE_NAME, SITE_URL_TYPED } from './static'
import { SERVICES } from './services'
import type { ServiceName } from './services'

export const getHost = (event: H3Event) => {
  const host = event.node.req.headers.host

  if (!host) throw new Error('Host header is not given!')

  return host
}

export const getRootHost = (host: string) => {
  const hostParts = host.split('.')
  const hostPartsLast = hostParts[hostParts.length - 1]

  if (hostPartsLast && /^localhost(:[0-9]+)?$/.test(hostPartsLast))
    return hostPartsLast

  if (hostParts.length === 1) return hostParts[0]

  return `${hostParts[hostParts.length - 2]}.${hostPartsLast}`
}

export const getServiceHref = ({
  allowInternal = true,
  host,
  isServer,
  isTesting,
  name,
  stagingHost,
}: {
  allowInternal?: boolean
  host?: string
  isServer: boolean
  isTesting?: boolean
  name: ServiceName
  stagingHost?: string
}) => {
  const { hasSubdomain, port } = SERVICES[name]
  const isSelf = name === SITE_NAME
  const nameSubdomainString = isSelf ? '' : `${name.replaceAll('_', '-')}.`

  if (isTesting) {
    return `${SITE_URL_TYPED.protocol}//${nameSubdomainString}${SITE_URL_TYPED.host}`
  }

  // the app itself always runs locally, even in frontend-only development -
  // only its backend dependencies get proxied to production there - so its
  // own href must never redirect to stagingHost, unlike other services'
  if (stagingHost && !isSelf) {
    return hasSubdomain
      ? `https://${nameSubdomainString}${stagingHost}`
      : `https://${stagingHost}/api/service/${name}`
  }

  if (isServer && allowInternal && !stagingHost) {
    return `http://${name}:${port}`
  }

  if (host) {
    if (!hasSubdomain)
      throw new Error(`Service "${name}" has no public subdomain!`)

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
    .filter((header) => header && header.name === name)
  return cookieMatches[0]
}
