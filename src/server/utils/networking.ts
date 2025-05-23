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
    }).toString()
}

export const useHost = () => {
  const event = useEvent()
  const host = getHost(event)

  if (!host) throw new Error('Host is not given!')

  return host
}
