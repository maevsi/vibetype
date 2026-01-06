export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const jwt = getJwtFromCookie()
  const query = getQuery(event)

  const getServiceHref = useGetServiceHref()
  const baseURL = getServiceHref({ name: 'postgraphile', port: 5000 })

  const graphql = await event.$fetch('/graphql', {
    baseURL,
    headers: {
      ...(jwt
        ? {
            authorization: `Bearer ${jwt}`,
          }
        : {}),
    },
    method: 'GET',
    query,
  })

  return graphql
})
