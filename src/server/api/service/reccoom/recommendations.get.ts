export default defineEventHandler(async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwt = getJwtFromCookie()
  const jwtPayload = await verifyJwt<Jwt>(jwt)
  const getServiceHref = useGetServiceHref()

  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    return throwError({
      status: 403,
      statusText: 'This endpoint only available to registered users.',
    })

  if (IS_IN_FRONTEND_DEVELOPMENT) {
    // reccoom is currently not available in frontend-only development
    // TODO: proxy to production
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
