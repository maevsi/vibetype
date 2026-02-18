export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const baseURL = useServiceHrefPostgraphile()
  const jwt = getJwtFromCookie()
  const body = await readRawBody(event)

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
