export type MaybeRefObj<T> = T extends object
  ? {
      [K in keyof T]: MaybeRef<T[K]>
    }
  : T

export type UnionToIntersection<T> = (
  T extends unknown ? (x: T) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never

export default {} // workaround until fix in nitro is released (https://github.com/nitrojs/nitro/pull/3368)
