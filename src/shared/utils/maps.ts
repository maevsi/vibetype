/** Builds the geo: link that opens a place in the user's default maps app,
 * falling back to an OpenStreetMap search when no coordinates exist. */
export const getMapsUrl = ({
  location,
  text,
}: {
  location?: { latitude: number; longitude: number } | null
  text?: string | null
}) =>
  location
    ? `geo:${location.latitude},${location.longitude}?z=16`
    : text
      ? `https://www.openstreetmap.org/search?query=${encodeURIComponent(text)}`
      : undefined
