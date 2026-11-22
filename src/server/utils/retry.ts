// thrown by a handler to signal that retrying is pointless (e.g. malformed
// input) so retryWithBackoff fails fast instead of burning through its delays
export class PermanentProcessingError extends Error {}

export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number,
  initialDelayMs: number,
): Promise<T> => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (error instanceof PermanentProcessingError) throw error
      if (attempt >= maxAttempts) throw error
      const delay = initialDelayMs * Math.pow(2, attempt - 1)
      console.warn(
        `Processing attempt ${attempt}/${maxAttempts} failed, retrying in ${delay}ms: ${error}`,
      )
      await new Promise<void>((resolve) => setTimeout(resolve, delay))
    }
  }

  throw new Error('Unreachable: retryWithBackoff exhausted without throwing')
}
