// only a path on this site is followed, as a `redirect` query parameter is open to anyone who can craft a link:
// `//host` and `/\host` are read as another host by browsers
export const getRedirectPath = (redirect: unknown, fallback: string) =>
  typeof redirect === 'string' && /^\/(?![/\\])/.test(redirect)
    ? redirect
    : fallback
