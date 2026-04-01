import type { GraphQLError } from 'graphql'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'

const jwtPostBodySchema = z.object({
  password: z.string(),
  username: z.string(),
})

export const jwtCreateMutation = graphql(`
  mutation JwtCreate($password: String!, $username: String!) {
    jwtCreate(input: { password: $password, username: $username }) {
      clientMutationId
      result
    }
  }
`)

export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: jwtPostBodySchema })

  const mutationJwtCreate = await urqlMutate({
    event,
    urql: {
      mutation: jwtCreateMutation,
      variables: { password: body.password, username: body.username },
    },
  })

  if (mutationJwtCreate.error) {
    if (mutationJwtCreate.error.networkError) {
      throw createAppError({
        status: 500,
        statusText:
          (mutationJwtCreate.error.networkError.cause as { message?: string })
            ?.message || mutationJwtCreate.error.networkError.message,
      })
    }

    if (mutationJwtCreate.error.graphQLErrors.length) {
      const messages = mutationJwtCreate.error.graphQLErrors
        .map((error: GraphQLError) => error.message)
        .join('; ')
      throw createAppError({
        status: 500,
        statusText: `GraphQL error(s) during JWT creation: ${messages}`,
      })
    }

    throw createAppError({
      status: 500,
      statusText:
        mutationJwtCreate.error.message ||
        'Unexpected error during JWT creation.',
    })
  }

  if (!mutationJwtCreate.data) {
    throw createAppError({
      status: 500,
      statusText: `No data returned from JWT creation mutation.`,
    })
  }

  const jwt = mutationJwtCreate.data?.jwtCreate?.result

  if (!jwt) {
    throw createAppError({
      status: 500,
      statusText: 'No JWT returned from creation mutation.',
    })
  }

  const { setJwtCookie, verifyJwt } = await useJsonWebToken()
  const jwtPayload = await verifyJwt<Jwt>(jwt)
  setJwtCookie({
    value: jwt,
    expires: jwtPayload?.exp ? jwtPayload.exp * 1000 : 0,
  })
  return {
    jwtPayload,
  }
})
