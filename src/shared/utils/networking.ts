import { filterQuery, getQuery } from 'ufo'

export { getIsSecure } from '~~/node/static'
export {
  getHost,
  getResponseCookie,
  getRootHost,
  getServiceHref,
} from '~~/node/networking'

// `//host` and `/\host` start like paths, but browsers resolve them to other sites
export const getIsSitePath = (value: string) => /^\/(?![/\\])/.test(value)

// the path is returned as is unless it carries the `language=auto` mark, as
// rebuilding the query can change its encoding, which callers comparing the
// result to the input would take for a difference
export const getPathWithoutLanguageDetection = (path: string) =>
  [getQuery(path).language].flat()[0] === 'auto'
    ? filterQuery(path, (key) => key !== 'language')
    : path
