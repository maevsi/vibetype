import type { H3Event } from 'h3'

export const useGetServiceHref = ({ event }: { event?: H3Event } = {}) => {
  const host = useHost({ event })
  const runtimeConfig = useRuntimeConfig()
  const isTesting = useIsTesting()

  return ({
    isSsr = true,
    name,
    port,
  }: {
    isSsr?: boolean
    name?: string
    port?: number
  }) =>
    getServiceHref({
      host,
      isSsr,
      isTesting,
      name,
      port,
      stagingHost: runtimeConfig.public.vio.stagingHost,
    })
}

export const useHost = ({ event }: { event?: H3Event } = {}) => {
  const { siteUrlTyped: siteUrl } = useSiteUrl()
  const host = event ? getHost(event) : siteUrl.host

  if (!host) throw new Error('Host is not given!')

  return host
}

export const useIsSecure = () =>
  getIsSecure({ runtimeConfig: useRuntimeConfig() })

export const useSiteUrl = () =>
  getSiteUrl(useRuntimeConfig().public.i18n.baseUrl)
