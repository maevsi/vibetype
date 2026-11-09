import type { H3Event } from 'h3'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'
import type {
  JwtUpdateAttendanceAddMutation,
  JwtUpdateGuestAddMutation,
  JwtUpdateMutation,
} from '~~/gql/generated/graphql'

const jwtUpdateBodySchema = z.union([
  z.object({
    id: z.string(),
  }),
  z.object({
    attendanceId: z.string(),
  }),
  z.object({
    guestId: z.string(),
  }),
])

const mutationJwtUpdate = graphql(`
  mutation JwtUpdate($input: JwtUpdateInput!) {
    jwtUpdate(input: $input) {
      clientMutationId
      result
    }
  }
`)

const mutationJwtUpdateAttendanceAdd = graphql(`
  mutation JwtUpdateAttendanceAdd($input: JwtUpdateAttendanceAddInput!) {
    jwtUpdateAttendanceAdd(input: $input) {
      result
    }
  }
`)

const mutationJwtUpdateGuestAdd = graphql(`
  mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {
    jwtUpdateGuestAdd(input: $input) {
      result
    }
  }
`)

const getJwt = async ({
  event,
  body,
}: {
  event: H3Event
  body: z.infer<typeof jwtUpdateBodySchema>
}) => {
  if ('id' in body) {
    const jwtUpdateMutation = await urqlMutate({
      event,
      urql: {
        mutation: mutationJwtUpdate,
        variables: {
          input: { jwtId: body.id },
        },
      },
    })
    return getJwtFromResult({
      context: 'JWT update',
      createAppError,
      extract: (data: JwtUpdateMutation) => data.jwtUpdate?.result,
      result: jwtUpdateMutation,
    })
  }

  if ('attendanceId' in body) {
    const jwtUpdateAttendanceAddMutation = await urqlMutate({
      event,
      urql: {
        mutation: mutationJwtUpdateAttendanceAdd,
        variables: {
          input: {
            ...body,
          },
        },
      },
    })
    return getJwtFromResult({
      context: 'JWT attendance add',
      createAppError,
      extract: (data: JwtUpdateAttendanceAddMutation) =>
        data.jwtUpdateAttendanceAdd?.result,
      result: jwtUpdateAttendanceAddMutation,
    })
  }

  if ('guestId' in body) {
    const jwtUpdateGuestAddMutation = await urqlMutate({
      event,
      urql: {
        mutation: mutationJwtUpdateGuestAdd,
        variables: {
          input: {
            ...body,
          },
        },
      },
    })
    return getJwtFromResult({
      context: 'JWT guest add',
      createAppError,
      extract: (data: JwtUpdateGuestAddMutation) =>
        data.jwtUpdateGuestAdd?.result,
      result: jwtUpdateGuestAddMutation,
    })
  }
}

// typing the event lets `$fetch` check the request body against the schema // TODO: switch to `defineValidatedHandler` from `nuxt/server` once available (https://github.com/nuxt/nuxt/issues/36475)
type JwtPutEvent = H3Event<{ body: z.input<typeof jwtUpdateBodySchema> }>

export default defineEventHandler(async (event: JwtPutEvent) => {
  const body = await getBodySafe({ event, schema: jwtUpdateBodySchema })

  const jwt = await getJwt({ event, body })

  if (!jwt) {
    throw createAppError({
      status: 500,
      statusText: 'No JWT returned from update mutation.',
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
