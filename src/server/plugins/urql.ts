export default defineNitroPlugin(async (nitroApp) => {
  const runtimeConfig = useRuntimeConfig()
  const getServiceHref = useGetServiceHref()

  const baseUrl = getServiceHref({
    name: SITE_NAME,
  })

  const { urql, urqlTesting } = await getUrqlClient({
    baseUrl,
    runtimeConfig,
  })

  nitroApp.hooks.hook('request', (event) => {
    const isTesting = useIsTesting()

    event.context.$urql = isTesting ? urqlTesting : urql
  })
})
