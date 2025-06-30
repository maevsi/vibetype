import type { NuxtError } from '#app'
import { consola } from 'consola'

export const getCombinedErrorMessages = (
  errors: Readonly<BackendError[]>,
  pgIds?: Record<string, string>,
) => {
  const errorMessages: string[] = []

  for (const combinedError of errors) {
    if (combinedError.networkError) {
      errorMessages.push(combinedError.message)
    }

    for (const graphqlError of combinedError.graphQLErrors) {
      const translation = pgIds && pgIds[`postgres${graphqlError.errcode}`]

      if (translation) {
        errorMessages.push(translation)
      } else {
        errorMessages.push(graphqlError.message)
      }
    }
  }

  return errorMessages
}

export const showAppError = (error: string | Partial<NuxtError>) => {
  showError(error)
  consola.error(error)
}
