export default defineEventHandler(async (event) => {
  const { getJwtFromCookie } = await useJsonWebToken()

  const baseURL = useServiceHrefPostgraphile()
  const jwt = getJwtFromCookie()
  // A token handed over in the request wins over the cookie, as a server side
  // request made right after a token change still carries the previous cookie
  const authorization =
    getRequestHeader(event, 'authorization') ??
    (jwt ? `Bearer ${jwt}` : undefined)
  const body = await readRawBody(event)

  const moderationTexts = getModerationTexts(body)

  // Shortcut: requests sent straight to PostGraphile's public address skip this check, and an OpenAI outage lets text through instead of blocking every event.
  // Moving the check into a PostGraphile plugin that wraps these mutations would close both gaps.
  if (moderationTexts.length && openAiClient) {
    try {
      // moderation is free of charge (https://platform.openai.com/docs/pricing#moderation)
      const moderation = await openAiClient.moderations.create({
        input: moderationTexts,
        model: 'omni-moderation-latest',
      })

      if (moderation.results.some((result) => result.flagged))
        return {
          errors: [
            {
              errcode: MODERATION_ERROR_CODE,
              message: 'The text contains content that is not allowed.',
            },
          ],
        }
    } catch (error) {
      console.error('Text moderation failed', error)
    }
  }

  const graphql = await event.$fetch('/graphql', {
    baseURL,
    body,
    headers: {
      ...(authorization ? { authorization } : {}),
    },
    method: 'POST',
  })

  return graphql
})
