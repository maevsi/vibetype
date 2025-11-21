import type { AppGraphQLError, AppCombinedError } from '../types/api' // TODO: remove import once shared namespace has proper auto-imports (https://github.com/nuxt/nuxt/issues/32714)

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
