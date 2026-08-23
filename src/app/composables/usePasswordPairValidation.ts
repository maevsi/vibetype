export const usePasswordPairValidation = ({
  getPassword,
  getRepetition,
  messages,
  setPassword,
  setRepetition,
}: {
  getPassword: () => string
  getRepetition: () => string
  messages: () => AuthPasswordValidationMessages
  setPassword: (value: string) => void
  setRepetition: (value: string) => void
}) => {
  const { locale } = useI18n()

  const password = useAuthFieldValidation({
    validator: (value: string) =>
      getStrongPasswordError({
        locale: locale.value,
        messages: messages(),
        password: value,
      }),
  })

  const repetition = useAuthFieldValidation({
    validator: (value: string) =>
      getPasswordConfirmationError({
        messages: messages(),
        password: getPassword(),
        repetition: value,
      }),
  })

  const handlePasswordBlur = async () => {
    await password.handleBlur(getPassword())
  }

  const handlePasswordInput = async (value: string) => {
    setPassword(value)
    await password.handleInput(value)

    if (repetition.touched.value) {
      await repetition.validate(getRepetition())
    }
  }

  const handleRepetitionBlur = async () => {
    await repetition.handleBlur(getRepetition())
  }

  const handleRepetitionInput = async (value: string) => {
    setRepetition(value)
    await repetition.handleInput(value)
  }

  // Flags both fields as touched and validates them, so a submit attempt
  // without ever blurring a field still surfaces its error.
  const validate = async () => {
    password.touched.value = true
    repetition.touched.value = true

    const isPasswordValid = await password.validate(getPassword())
    const isRepetitionValid = await repetition.validate(getRepetition())

    return isPasswordValid && isRepetitionValid
  }

  return {
    handlePasswordBlur,
    handlePasswordInput,
    handleRepetitionBlur,
    handleRepetitionInput,
    password,
    repetition,
    validate,
  }
}
