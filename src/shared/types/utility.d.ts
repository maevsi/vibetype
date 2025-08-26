export type UnionToIntersection<T> = (
  T extends unknown ? (x: T) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never
