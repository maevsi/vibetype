export interface AuthPasswordValidationMessages {
  minimumLength: string
  passwordMismatch: string
  specialCharacter: string
  uppercase: string
}

export const getStrongPasswordError = ({
  messages,
  password,
}: {
  messages: AuthPasswordValidationMessages
  password: string
}): string => {
  if (password.length < VALIDATION_PASSWORD_LENGTH_MINIMUM_V2) {
    return messages.minimumLength
  }

  if (!/[A-Z]/.test(password)) {
    return messages.uppercase
  }

  if (!VALIDATION_PASSWORD_SCHEMA.test(password)) {
    return messages.specialCharacter
  }

  return ''
}

export const getPasswordConfirmationError = ({
  messages,
  password,
  repetition,
}: {
  messages: AuthPasswordValidationMessages
  password: string
  repetition: string
}): string => {
  if (repetition !== password) {
    return messages.passwordMismatch
  }

  return ''
}
