export const useGetServiceHref = () => {
  const host = useHost()
  const runtimeConfig = useRuntimeConfig()

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
      name,
      port,
      stagingHost: runtimeConfig.public.vio.stagingHost,
    })
}

export const useHost = () => {
  const event = useEvent()
  const host = getHost(event)

  if (!host) throw new Error('Host is not given!')

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
export const useIsSecure = () =>
  getIsSecure({ runtimeConfig: useRuntimeConfig() })

export const useSiteUrl = () =>
  getSiteUrl(useRuntimeConfig().public.i18n.baseUrl)
