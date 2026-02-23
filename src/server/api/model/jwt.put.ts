import type { H3Event } from 'h3'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'
import type {
  JwtUpdateAttendanceAddMutation,
  // JwtUpdateGuestAddMutation,
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
  mutation JwtUpdate($id: UUID!) {
    jwtUpdate(input: { jwtId: $id }) {
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

// const mutationJwtUpdateGuestAdd = graphql(`
//   mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {
//     jwtUpdateGuestAdd(input: $input) {
//       jwt
//     }
//   }
// `)

const getJwt = async ({
  event,
  body,
}: {
  event: H3Event
  body: z.infer<typeof jwtUpdateBodySchema>
}) => {
  if ('id' in body) {
    const jwtCreateMutation = await urqlMutate({
      event,
      urql: {
        mutation: mutationJwtUpdate,
        variables: {
          ...body,
        },
      },
    })
    return getJwtFromResult({
      context: 'JWT update',
      extract: (data: JwtUpdateMutation) => data.jwtUpdate?.result,
      result: jwtCreateMutation,
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
      extract: (data: JwtUpdateAttendanceAddMutation) =>
        data.jwtUpdateAttendanceAdd?.result,
      result: jwtUpdateAttendanceAddMutation,
    })
  }

  // if ('guestId' in body) {
  //   const jwtUpdateGuestAddMutation = await urqlMutate({
  //     event,
  //     urql: {
  //       mutation: mutationJwtUpdateGuestAdd,
  //       variables: {
  //         input: {
  //           ...body,
  //         },
  //       },
  //     },
  //   })
  //   return getJwtFromResult({
  //     context: 'JWT guest add',
  //     extract: (data: JwtUpdateGuestAddMutation) => data.jwtUpdateGuestAdd?.jwt,
  //     result: jwtUpdateGuestAddMutation,
  //   })
  // }
}

export default defineEventHandler(async (event) => {
  const body = await getBodySafe({ event, schema: jwtUpdateBodySchema })

  const jwt = await getJwt({ event, body })

  if (!jwt) {
    return throwError({
      status: 500,
      statusText: 'No JWT returned from update mutation.',
    })
  }

  const { setJwtCookie, verifyJwt } = await useJsonWebToken()
  setJwtCookie(jwt)

  const jwtPayload = await verifyJwt<Jwt>(jwt)
  return {
    jwtPayload,
  }
})
