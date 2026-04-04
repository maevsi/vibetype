import type { Client, OperationResult, OperationResultSource } from '@urql/core'

import type { AppGraphQLError, AppCombinedError } from '#shared/types/api'

export const getGraphQLErrorMessage = ({
  graphqlError,
  postgresErrorMap,
}: {
  graphqlError: AppGraphQLError
  postgresErrorMap?: Record<string, string>
}) =>
  (postgresErrorMap && postgresErrorMap[`postgres${graphqlError.errcode}`]) ||
  graphqlError.message

export const getCombinedErrorMessages = (
  errors: Readonly<AppCombinedError[]>,
  postgresErrorMap?: Record<string, string>,
) => {
  const errorMessages: string[] = []

  for (const combinedError of errors) {
    if (combinedError.networkError) {
      errorMessages.push(combinedError.message)
    }

    for (const graphqlError of combinedError.graphQLErrors) {
      errorMessages.push(
        getGraphQLErrorMessage({ graphqlError, postgresErrorMap }),
      )
    }
  }

  return errorMessages
}

export const getJwtFromResult = <
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
      throw createAppError({
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
      throw createAppError({
        status: 500,
        statusText: `GraphQL error(s) during ${context}: ${messages}`,
      })
    }

    throw createAppError({
      status: 500,
      statusText: result.error.message || `Unexpected error during ${context}.`,
    })
  }

  if (!result.data) {
    throw createAppError({
      status: 500,
      statusText: `No data returned from ${context} mutation.`,
    })
  }

  const jwt = extract(result.data)
  if (!jwt) {
    throw createAppError({
      status: 500,
      statusText: `No JWT returned from ${context} mutation.`,
    })
  }

  return jwt
}
