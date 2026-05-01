/**
 * Composable for field validation with deduplication support
 */

export interface ValidationResult {
  error?: string
  success: boolean
}

export interface UseValidationFieldOptions {
  initialValue?: string
  onErrorChange?: (error: string) => void
  validator: (value: string) => ValidationResult | Promise<ValidationResult>
}

export interface UseValidationFieldReturn {
  error: Ref<string>
  handleBlur: () => Promise<void>
  handleInput: (newValue: string) => void
  isLoading: Ref<boolean>
  reset: () => void
  touched: Ref<boolean>
  validate: () => Promise<boolean>
  value: Ref<string>
}

export interface UseValidationDedupOptions {
  validator: (username: string) => Promise<boolean>
}

export const useValidationField = (
  options: UseValidationFieldOptions,
): UseValidationFieldReturn => {
  const value = ref(options.initialValue || '')
  const error = ref('')
  const touched = ref(false)
  const isLoading = ref(false)
  let latestValidationRun = 0

  const validate = async (): Promise<boolean> => {
    const validationRun = ++latestValidationRun
    isLoading.value = true

    try {
      const result = await options.validator(value.value)

      if (validationRun !== latestValidationRun) {
        return false
      }

      error.value = result.error || ''
      options.onErrorChange?.(error.value)
      return result.success
    } catch (err) {
      if (validationRun !== latestValidationRun) {
        return false
      }

      if (err instanceof Error && err.name !== 'AbortError') {
        error.value = 'Validation error'
        options.onErrorChange?.(error.value)
      }
      return false
    } finally {
      if (validationRun === latestValidationRun) {
        isLoading.value = false
      }
    }
  }

  const handleBlur = async () => {
    touched.value = true
    await validate()
  }

  const handleInput = (newValue: string) => {
    value.value = newValue
    if (touched.value) {
      void validate()
    }
  }

  const reset = () => {
    latestValidationRun += 1
    value.value = options.initialValue || ''
    error.value = ''
    touched.value = false
    isLoading.value = false
  }

  return {
    error,
    handleBlur,
    handleInput,
    isLoading,
    reset,
    touched,
    validate,
    value,
  }
}

export const useValidationDedup = () => {
  const lastValue = ref('')
  const pendingRequest = ref<Promise<boolean> | null>(null)

  const validateWithDedup = async (
    value: string,
    options: UseValidationDedupOptions,
  ): Promise<boolean> => {
    // If same value is already being validated, return the pending promise
    if (lastValue.value === value && pendingRequest.value) {
      return pendingRequest.value
    }

    lastValue.value = value
    pendingRequest.value = options.validator(value)

    try {
      const result = await pendingRequest.value
      return result
    } finally {
      pendingRequest.value = null
    }
  }

  onUnmounted(() => {
    pendingRequest.value = null
  })

  return {
    validateWithDedup,
  }
}
