// this proxy may be dropped in the future for performance reasons
export default defineEventHandler(async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  const jwt = getJwtFromCookie()
  const jwtDecoded = await verifyJwt(jwt)
  const jwtName = useJwtName()

  if (!(jwtDecoded.role === `${SITE_NAME}_account`))
    return throwError({
      statusCode: 403,
      statusMessage: 'This endpoint only available to registered users.',
    })

  const recommendations = await $fetch<string[]>('/recommendations', {
    baseURL: 'http://reccoom:5245',
    headers: {
      cookie: `${jwtName}=${jwt}`,
    },
  })

  return recommendations
})
