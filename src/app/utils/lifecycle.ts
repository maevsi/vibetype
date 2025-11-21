import { consola } from 'consola'

import type { NuxtError } from '#app'

export const showAppError = (error: string | Partial<NuxtError>) => {
  showError(error)
  consola.error(error)
}
