import type { H3Event } from 'h3'

import type { ServiceName } from '~~/shared/utils/services'

export const useGetServiceHref = ({ event }: { event?: H3Event } = {}) => {
  const host = useHost({ event })
  const runtimeConfig = useRuntimeConfig()
  const isTesting = useIsTesting()

  return ({
    allowInternal = true,
    name,
  }: {
    allowInternal?: boolean
    name: ServiceName
  }) =>
    getServiceHref({
      allowInternal,
      host,
      isTesting,
      name,
      stagingHost: runtimeConfig.public.vio.stagingHost,
    })
}

export const getServiceHrefPostgraphile = () =>
  getServiceHref({ name: 'postgraphile' })

export const useServiceHrefPostgraphile = () =>
  useGetServiceHref()({ name: 'postgraphile' })

export const useHost = ({ event }: { event?: H3Event } = {}) => {
  const { siteUrlTyped: siteUrl } = useSiteUrl()
  const host = event ? getHost(event) : siteUrl.host

  if (!host) throw new Error('Host is not given!')

  return host
}

export const useIsSecure = () =>
  getIsSecure({ siteUrl: useSiteUrl().siteUrlTyped })

export const useSiteUrl = () =>
  getSiteUrl(useRuntimeConfig().public.i18n.baseUrl)
