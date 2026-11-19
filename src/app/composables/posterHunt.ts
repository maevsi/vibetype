/** Whether the poster hunt has been visited, kept in a cookie so the server renders the same dashboard as the client. */
export const usePosterHuntSeen = () =>
  useCookie<boolean>(POSTER_HUNT_SEEN_COOKIE_NAME, {
    default: () => false,
    httpOnly: false,
    maxAge: POSTER_HUNT_SEEN_COOKIE_MAX_AGE,
    sameSite: COOKIE_SAME_SITE,
    secure: useIsSecure(),
  })
