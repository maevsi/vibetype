/**
 * Composable for field validation with deduplication support
 */

export interface ValidationResult {
  error?: string
  success: boolean
}

export interface UseValidationFieldOptions {
  debounceMs?: number
  initialValue?: string
  onErrorChange?: (error: string) => void
  validator: (value: string) => ValidationResult | Promise<ValidationResult>
}

const DEFAULT_DEBOUNCE_MS = 300

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
  let debounceTimer: ReturnType<typeof setTimeout> | undefined

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
    clearTimeout(debounceTimer)
    await validate()
  }

  const handleInput = (newValue: string) => {
    value.value = newValue
    if (touched.value) {
      // Invalidate any in-flight validation immediately so its result can't
      // overwrite the state while this newer input awaits the debounce delay.
      latestValidationRun += 1
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        void validate()
      }, options.debounceMs ?? DEFAULT_DEBOUNCE_MS)
    }
  }

  const reset = () => {
    clearTimeout(debounceTimer)
    latestValidationRun += 1
    value.value = options.initialValue || ''
    error.value = ''
    touched.value = false
    isLoading.value = false
  }

  onUnmounted(() => {
    clearTimeout(debounceTimer)
  })

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
