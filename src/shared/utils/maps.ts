/** Builds the cross-platform Google Maps link that opens a place in the maps app of the device. */
export const getMapsUrl = ({
  location,
  text,
}: {
  location?: { latitude: number; longitude: number } | null
  text: string
}) =>
  `https://www.google.com/maps/search/?api=1&query=${
    location
      ? `${location.latitude},${location.longitude}`
      : encodeURIComponent(text)
  }`
