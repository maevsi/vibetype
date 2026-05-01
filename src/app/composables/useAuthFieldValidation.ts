export interface UseAuthFieldValidationOptions {
  validator: (value: string) => string | Promise<string>
}

export const useAuthFieldValidation = (
  options: UseAuthFieldValidationOptions,
) => {
  const error = ref('')
  const touched = ref(false)

  const validate = async (value: string): Promise<boolean> => {
    error.value = await options.validator(value)
    return !error.value
  }

  const handleBlur = async (value: string) => {
    touched.value = true
    await validate(value)
  }

  const handleInput = async (value: string) => {
    if (!touched.value) return
    await validate(value)
  }

  const reset = () => {
    error.value = ''
    touched.value = false
  }

  return {
    error,
    handleBlur,
    handleInput,
    reset,
    touched,
    validate,
  }
}
