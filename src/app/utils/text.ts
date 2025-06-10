export const copyText = async (text: string) => {
  const clipboard = (await import('clipboardy')).default
  await clipboard.write(text)
}

export const calculatePasswordStrength = (password: string) => {
  if (!password) return 0

  const lengthBonus = Math.min(10, password.length) * 5 // max 50 points
  const hasLower = /[a-z]/.test(password) ? 10 : 0
  const hasUpper = /[A-Z]/.test(password) ? 10 : 0
  const hasNumber = /[0-9]/.test(password) ? 10 : 0
  const hasSymbol = /[^a-zA-Z0-9]/.test(password) ? 10 : 0

  const varietyBonus = hasLower && hasUpper && hasNumber && hasSymbol ? 10 : 0

  const uniqueChars = new Set(password).size
  const repetitionPenalty = Math.max(0, (password.length - uniqueChars) * 2) // up to -20

  const score =
    lengthBonus +
    hasLower +
    hasUpper +
    hasNumber +
    hasSymbol +
    varietyBonus -
    repetitionPenalty

  return Math.max(0, Math.min(100, score))
}
