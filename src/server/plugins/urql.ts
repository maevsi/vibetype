export default defineNitroPlugin(async (nitroApp) => {
  const runtimeConfig = useRuntimeConfig()
  const getServiceHref = useGetServiceHref()

  const baseUrl = getServiceHref({
    name: SITE_NAME,
  })

  // This client lives as long as the process, and a server-side ssrExchange
  // stores every query result and replays it for any later query with the
  // same variables, so without `isSsr: false` the sitemap would never change
  // until a restart
  const { urql, urqlTesting } = await getUrqlClient({
    baseUrl,
    isSsr: false,
    runtimeConfig,
  })

  nitroApp.hooks.hook('request', (event) => {
    const isTesting = useIsTesting()

    event.context.$urql = isTesting ? urqlTesting : urql
  })
})
