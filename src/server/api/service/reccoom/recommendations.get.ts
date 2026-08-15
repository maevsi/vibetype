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
  const baseURL = getServiceHref({ name: 'reccoom' })
  // reccoom itself expects a plain `jwt` cookie, but when proxied through
  // production's own API route (frontend-only development), that route
  // re-derives the JWT from the cookie named JWT_COOKIE_NAME instead
  const recommendations = await $fetch<
    Array<{ event_id: string; score: number; score_type: string }>
  >(`${baseURL}/recommendations`, {
    headers: {
      cookie: `${stagingHost ? JWT_COOKIE_NAME : 'jwt'}=${jwt}`,
    },
  })

  return recommendations
})
