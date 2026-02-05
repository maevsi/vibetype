import type { Client, OperationResult, OperationResultSource } from '@urql/core'
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
  mutation JwtUpdate($id: UUID!) {
    jwtUpdate(input: { jwtId: $id }) {
      clientMutationId
      jwt
    }
  }
`)

const mutationJwtUpdateAttendanceAdd = graphql(`
  mutation JwtUpdateAttendanceAdd($input: JwtUpdateAttendanceAddInput!) {
    jwtUpdateAttendanceAdd(input: $input) {
      jwt
    }
  }
`)

const mutationJwtUpdateGuestAdd = graphql(`
  mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {
    jwtUpdateGuestAdd(input: $input) {
      jwt
    }
  }
`)

const getJwtFromResult = <
  Data,
  Variables extends Parameters<Client['mutation']>[1],
>({
  context,
  extract,
  result,
}: {
  context: string
  extract: (data: Data) => string | null | undefined
  result: Awaited<OperationResultSource<OperationResult<Data, Variables>>>
}) => {
  if (result.error) {
    if (result.error.networkError) {
      return throwError({
        status: 500,
        statusText:
          (result.error.networkError.cause as { message?: string })?.message ||
          result.error.networkError.message,
      })
    }

    if (result.error.graphQLErrors?.length) {
      const messages = result.error.graphQLErrors
        .map((e) => e.message)
        .join('; ')
      return throwError({
        status: 500,
        statusText: `GraphQL error(s) during ${context}: ${messages}`,
      })
    }

    return throwError({
      status: 500,
      statusText: result.error.message || `Unexpected error during ${context}.`,
    })
  }

  if (!result.data) {
    return throwError({
      status: 500,
      statusText: `No data returned from ${context} mutation.`,
    })
  }

  const jwt = extract(result.data)
  if (!jwt) {
    return throwError({
      status: 500,
      statusText: `No JWT returned from ${context} mutation.`,
    })
  }

  return jwt
}

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
      extract: (data: JwtUpdateMutation) => data.jwtUpdate?.jwt,
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
        data.jwtUpdateAttendanceAdd?.jwt,
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
      extract: (data: JwtUpdateGuestAddMutation) => data.jwtUpdateGuestAdd?.jwt,
      result: jwtUpdateGuestAddMutation,
    })
  }
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

  const jwtDecoded = await verifyJwt<Jwt>(jwt)
  return {
    jwtDecoded,
  }
})
