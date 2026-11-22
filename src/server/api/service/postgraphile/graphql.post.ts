export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const baseURL = useServiceHrefPostgraphile()
  const jwt = getJwtFromCookie()
  // A token handed over in the request wins over the cookie, as a server side
  // request made right after a token change still carries the previous cookie
  const authorization =
    getRequestHeader(event, 'authorization') ??
    (jwt ? `Bearer ${jwt}` : undefined)
  const eventLink = getRequestHeader(event, EVENT_LINK_HEADER_NAME)
  const body = await readRawBody(event)

  const graphql = await event.$fetch('/graphql', {
    baseURL,
    body,
    headers: {
      ...(authorization ? { authorization } : {}),
      ...(eventLink ? { [EVENT_LINK_HEADER_NAME]: eventLink } : {}),
    },
    method: 'POST',
  })

  return graphql
})
