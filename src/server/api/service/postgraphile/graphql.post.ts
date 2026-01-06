export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const jwt = getJwtFromCookie()
  const body = await readRawBody(event)

  const getServiceHref = useGetServiceHref()
  const baseURL = getServiceHref({ name: 'postgraphile', port: 5000 })

  const graphql = await event.$fetch('/graphql', {
    baseURL,
    body,
    headers: {
      ...(jwt
        ? {
            authorization: `Bearer ${jwt}`,
          }
        : {}),
    },
    method: 'POST',
  })

  return graphql
})
