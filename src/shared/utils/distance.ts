export type Coordinates = {
  latitude: number
  longitude: number
}

const EARTH_RADIUS_KILOMETERS = 6371

const toRadians = (degrees: number) => (degrees * Math.PI) / 180

export const getDistanceKilometers = (from: Coordinates, to: Coordinates) => {
  const latitudeDelta = toRadians(to.latitude - from.latitude)
  const longitudeDelta = toRadians(to.longitude - from.longitude)
  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(toRadians(from.latitude)) *
      Math.cos(toRadians(to.latitude)) *
      Math.sin(longitudeDelta / 2) ** 2

  return 2 * EARTH_RADIUS_KILOMETERS * Math.asin(Math.sqrt(haversine))
}

export const getDistanceKilometersNearest = (
  origins: readonly Coordinates[],
  to: Coordinates,
) =>
  origins.length
    ? Math.min(...origins.map((origin) => getDistanceKilometers(origin, to)))
    : undefined
