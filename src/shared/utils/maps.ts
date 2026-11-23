/** Builds the geo: link that opens a place in the user's default maps app. */
export const getMapsUrl = ({
  location,
}: {
  location?: { latitude: number; longitude: number } | null
}) =>
  location ? `geo:${location.latitude},${location.longitude}?z=16` : undefined
