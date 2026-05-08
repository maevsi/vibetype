export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export type UnionToIntersection<T> = (
  T extends unknown ? (x: T) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never
