export const PENDING_DELAY_MILLISECONDS = 300
export const PENDING_MINIMUM_MILLISECONDS = 500

/** Reports a promise as pending only once it outlasts the delay, and then for at least the minimum, so a pending indicator never flashes. */
export const awaitWithPendingState = async (
  promise: Promise<unknown>,
  setIsPending: (isPending: boolean) => void,
) => {
  let pendingSince: number | undefined
  const timeout = setTimeout(() => {
    pendingSince = Date.now()
    setIsPending(true)
  }, PENDING_DELAY_MILLISECONDS)

  try {
    await promise
  } finally {
    clearTimeout(timeout)

    if (pendingSince !== undefined) {
      const remaining =
        PENDING_MINIMUM_MILLISECONDS - (Date.now() - pendingSince)

      if (remaining > 0)
        await new Promise((resolve) => setTimeout(resolve, remaining))

      setIsPending(false)
    }
  }
}
