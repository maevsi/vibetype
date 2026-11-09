export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const baseURL = useServiceHrefPostgraphile()
  const jwt = getJwtFromCookie()
  // A token handed over in the request wins over the cookie, as a server side
  // request made right after a token change still carries the previous cookie
  const authorization =
    getRequestHeader(event, 'authorization') ??
    (jwt ? `Bearer ${jwt}` : undefined)
  const query = getQuery(event)

  const variables = // TODO: remove if Postgraphile supports GET
    typeof query.variables === 'string'
      ? (() => {
          try {
            return JSON.parse(query.variables)
          } catch (error) {
            throw createAppError({
              status: 400,
              message: 'Bad Request',
              data: {
                message: `Invalid JSON in query.variables: ${error instanceof Error ? error.message : String(error)}`,
              },
            })
          }
        })()
      : query.variables

  const graphql = await event.$fetch('/graphql', {
    baseURL,
    body: {
      query: query.query,
      operationName: query.operationName,
      variables,
    }, // TODO: remove if Postgraphile supports GET
    headers: {
      ...(authorization ? { authorization } : {}),
    },
    method: 'POST', // TODO: 'GET' if Postgraphile supports GET
    // query, // TODO: reenable if Postgraphile supports GET
  })

  return graphql
})
