// TODO: actually account for unresolved promises in usages (remove awaits)
export const zalgo = async <T>(maybePromise: T) =>
  import.meta.server ? await maybePromise : maybePromise
