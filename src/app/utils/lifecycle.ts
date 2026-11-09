import type { NuxtError } from '#app'

export const showAppError = (error: string | Partial<NuxtError>) => {
  showError(error)

  // client errors like a missing event are expected, `showError` defaults to 500 for the rest
  if (typeof error === 'string' || (error.status ?? 500) >= 500)
    console.error(error)
}
