export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const baseURL = useServiceHrefPostgraphile()
  const jwt = getJwtFromCookie()
  const query = getQuery(event)

  const variables = // TODO: remove with Postgraphile v5
    typeof query.variables === 'string'
      ? JSON.parse(query.variables)
      : query.variables

  const graphql = await event.$fetch('/graphql', {
    baseURL,
    body: {
      query: query.query,
      operationName: query.operationName,
      variables,
    }, // TODO: remove with Postgraphile v5
    headers: {
      ...(jwt
        ? {
            authorization: `Bearer ${jwt}`,
          }
        : {}),
    },
    method: 'POST', // TODO: 'GET' with Postgraphile v5
    // query, // TODO: reenable with Postgraphile v5
  })

  return graphql
})
