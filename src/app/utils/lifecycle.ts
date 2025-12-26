import type { NuxtError } from '#app'

export const showAppError = (error: string | Partial<NuxtError>) => {
  showError(error)
  console.error(error)
}
