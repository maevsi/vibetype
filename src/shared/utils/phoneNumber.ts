import { parsePhoneNumberFromString } from 'libphonenumber-js/min'

export const getPhoneNumberFormatted = <T extends string | null | undefined>(
  phoneNumber: T,
): T | string => {
  if (!phoneNumber) return phoneNumber

  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber)

  return parsedPhoneNumber?.isValid()
    ? parsedPhoneNumber.formatInternational()
    : phoneNumber
}
