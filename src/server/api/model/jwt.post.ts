import { z } from 'zod'

import { graphql } from '~~/gql/generated'
import type { JwtCreateMutation } from '~~/gql/generated/graphql'

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

  const jwt = getJwtFromResult<
    JwtCreateMutation,
    (typeof mutationJwtCreate)['operation']['variables']
  >({
    context: 'JWT creation',
    extract: (data: JwtCreateMutation) => data.jwtCreate?.result,
    result: mutationJwtCreate,
  })

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
