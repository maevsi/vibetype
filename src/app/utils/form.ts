export const isFieldInvalid = (field: {
  state: { meta: { isTouched: boolean; isValid: boolean } }
}) => field.state.meta.isTouched && !field.state.meta.isValid

export const normalizeFieldErrors = (
  errors: unknown[],
): Array<{ message?: string } | undefined> =>
  errors.map((e) => {
    if (e === undefined || e === null) return undefined
    if (typeof e === 'string') return { message: e }
    if (typeof e === 'object' && 'message' in e)
      return e as { message?: string }
    return undefined
  })
