export interface AuthPasswordValidationMessages {
  minimumLength: string
  passwordMismatch: string
  tooWeak: string
}

export const getStrongPasswordError = ({
  messages,
  password,
}: {
  messages: Pick<AuthPasswordValidationMessages, 'minimumLength' | 'tooWeak'>
  password: string
}): string => {
  if (password.length < VALIDATION_PASSWORD_LENGTH_MINIMUM_V2) {
    return messages.minimumLength
  }

  if (getPasswordStrengthScore(password) < PASSWORD_STRENGTH_SCORE_MINIMUM) {
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
