export default defineEventHandler(async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwt = getJwtFromCookie()
  const jwtPayload = await verifyJwt<Jwt>(jwt)
  const getServiceHref = useGetServiceHref()
  const runtimeConfig = useRuntimeConfig()

  if (!(jwtPayload?.role === `${SITE_NAME}_account`))
    throw createAppError({
      status: 403,
      statusText: 'This endpoint only available to registered users.',
    })

  const { stagingHost } = runtimeConfig.public.vio
  // reccoom has no public subdomain, so frontend-only development proxies
  // through production's own API route instead of a direct service href.
  const recommendations = await $fetch<
    Array<{ event_id: string; score: number; score_type: string }>
  >(
    stagingHost
      ? `https://${stagingHost}/api/service/reccoom/recommendations`
      : `${getServiceHref({ name: 'reccoom', port: 5245 })}/recommendations`,
    {
      headers: {
        cookie: `${stagingHost ? JWT_COOKIE_NAME : 'jwt'}=${jwt}`,
      },
    },
  )

  return recommendations
})
