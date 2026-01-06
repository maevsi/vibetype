// this proxy may be dropped in the future for performance reasons
export default defineEventHandler(async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwt = getJwtFromCookie()
  const jwtDecoded = await verifyJwt(jwt)
  const getServiceHref = useGetServiceHref()
  const runtimeConfig = useRuntimeConfig()

  if (!(jwtDecoded?.role === `${SITE_NAME}_account`))
    return throwError({
      statusCode: 403,
      statusMessage: 'This endpoint only available to registered users.',
    })

  if (runtimeConfig.public.vio.stagingHost) {
    // reccoom is currently not available in frontend-only development
    return []
  }

  const baseURL = getServiceHref({ name: 'reccoom', port: 5245 })
  const recommendations = await $fetch<string[]>('/recommendations', {
    baseURL,
    headers: {
      cookie: `jwt=${jwt}`,
    },
  })

  return recommendations
})
