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
      jwt
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
      return throwError({
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
      return throwError({
        status: 500,
        statusText: `GraphQL error(s) during JWT creation: ${messages}`,
      })
    }

    return throwError({
      status: 500,
      statusText:
        mutationJwtCreate.error.message ||
        'Unexpected error during JWT creation.',
    })
  }

  if (!mutationJwtCreate.data) {
    return throwError({
      status: 500,
      statusText: `No data returned from JWT creation mutation.`,
    })
  }

  const jwt = mutationJwtCreate.data?.jwtCreate?.jwt

  if (!jwt) {
    return throwError({
      status: 500,
      statusText: 'No JWT returned from creation mutation.',
    })
  }

  const { setJwtCookie, verifyJwt } = await useJsonWebToken()
  setJwtCookie(jwt)

  const jwtPayload = await verifyJwt<Jwt>(jwt)
  return {
    jwtPayload,
  }
})
