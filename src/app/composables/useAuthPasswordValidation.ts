export interface AuthPasswordValidationMessages {
  minimumLength: string
  passwordMismatch: string
  tooWeak: string
}

export const getStrongPasswordError = async ({
  locale,
  messages,
  password,
}: {
  locale: string
  messages: Pick<AuthPasswordValidationMessages, 'minimumLength' | 'tooWeak'>
  password: string
}): Promise<string> => {
  if (password.length < VALIDATION_PASSWORD_LENGTH_MINIMUM) {
    return messages.minimumLength
  }

  if (
    (await getPasswordStrengthScore(password, locale)) <
    PASSWORD_STRENGTH_SCORE_MINIMUM
  ) {
    return messages.tooWeak
  }

  return ''
}

export const getPasswordConfirmationError = ({
  messages,
  password,
  repetition,
}: {
  messages: Pick<AuthPasswordValidationMessages, 'passwordMismatch'>
  password: string
  repetition: string
}): string => {
  if (repetition !== password) {
    return messages.passwordMismatch
  }

  return ''
}
