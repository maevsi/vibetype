import type { Client, OperationResult, OperationResultSource } from '@urql/core'

import type { AppCombinedError, AppGraphQLError } from '#shared/types/api'

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

export const getGraphQLErrorMessage = ({
  graphqlError,
  postgresErrorMap,
}: {
  graphqlError: AppGraphQLError
  postgresErrorMap?: Record<string, string>
}) =>
  (postgresErrorMap && postgresErrorMap[`postgres${graphqlError.errcode}`]) ||
  graphqlError.message

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
  const data = getResultDataOrThrow({ context, result })

  const jwt = extract(data)
  if (!jwt) {
    throw createAppError({
      status: 500,
      statusText: `No JWT returned from ${context} mutation.`,
    })
  }

  return jwt
}

export const getResultData = <Data>(result: {
  data?: Data
  error?: unknown
}): Data | undefined => {
  if (result.error || !result.data) return undefined
  return result.data
}

export const getResultDataOrThrow = <
  Data,
  Variables extends Parameters<Client['mutation']>[1],
>({
  context,
  result,
}: {
  context: string
  result: Awaited<OperationResultSource<OperationResult<Data, Variables>>>
}): Data => {
  if (result.error) {
    if (result.error.networkError) {
      throw createAppError({
        status: result.error.response?.status || 500,
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

  return result.data
}
