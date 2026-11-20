const ADDRESS_LENGTH_MAXIMUM = 300
const ADDRESS_POSTAL_CODE_LENGTH_MAXIMUM = 20
// countries that write the house number before the street name
const COUNTRY_CODES_HOUSE_NUMBER_FIRST = new Set([
  'au',
  'ca',
  'fr',
  'gb',
  'ie',
  'nz',
  'us',
])

export type AddressFields = {
  city?: string | null
  country?: string | null
  line1?: string | null
  line2?: string | null
  postalCode?: string | null
  region?: string | null
}

export type GeocodeResult = {
  address: AddressFields
  label: string
  name?: string
}

type NominatimResult = {
  address?: Record<string, unknown> | null
  name?: unknown
}

const getText = (value: unknown, lengthMaximum = ADDRESS_LENGTH_MAXIMUM) =>
  typeof value === 'string' && value.trim()
    ? value.trim().slice(0, lengthMaximum)
    : undefined

/** Maps a Nominatim result, requested with `addressdetails=1`, to the fields of an address. */
export const getAddressFromNominatim = (
  raw: NominatimResult | null | undefined,
): { address: AddressFields; name?: string } => {
  const source = raw?.address ?? {}
  const road = getText(source.road)
  const houseNumber = getText(source.house_number)
  const countryCode = getText(source.country_code)?.toLowerCase()
  const line1 = road
    ? houseNumber
      ? COUNTRY_CODES_HOUSE_NUMBER_FIRST.has(countryCode ?? '')
        ? `${houseNumber} ${road}`
        : `${road} ${houseNumber}`
      : road
    : undefined

  return {
    address: {
      city: getText(
        source.city ??
          source.town ??
          source.village ??
          source.hamlet ??
          source.municipality,
      ),
      country: getText(source.country),
      line1: line1?.slice(0, ADDRESS_LENGTH_MAXIMUM),
      postalCode: getText(source.postcode, ADDRESS_POSTAL_CODE_LENGTH_MAXIMUM),
      region: getText(source.state),
    },
    name: getText(raw?.name),
  }
}

/** Splits an address into the lines it is written on, without the region unless the city is unknown. */
export const getAddressLines = (address: AddressFields | null | undefined) =>
  [
    address?.line1,
    address?.line2,
    [address?.postalCode, address?.city ?? address?.region]
      .filter(Boolean)
      .join(' '),
    address?.country,
  ].filter((line): line is string => !!line)

export const getAddressText = (address: AddressFields | null | undefined) =>
  getAddressLines(address).join(', ')
