import type { H3Event } from 'h3'

export const getHost = (event: H3Event) => {
  const host = event.node.req.headers.host

  if (!host) throw new Error('Host header is not given!')

  return host
}

export const getServiceHref = ({
  host,
  isSsr = true,
  name,
  port,
  stagingHost,
}: {
  host?: string
  isSsr?: boolean
  name?: string
  port?: number
  stagingHost?: string
}) => {
  const nameSubdomain = name?.replaceAll('_', '-')
  const nameSubdomainString = nameSubdomain ? `${nameSubdomain}.` : ''
  const portString = port ? `:${port}` : ''

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
