export { getIsSecure } from '~~/node/static'
export {
  getHost,
  getResponseCookie,
  getRootHost,
  getServiceHref,
} from '~~/node/networking'

// `//host` and `/\host` start like paths, but browsers resolve them to other sites
export const getIsSitePath = (value: string) => /^\/(?![/\\])/.test(value)
