const EVENT_LINK_PART_PATTERN = /^[-A-Za-z0-9]{1,100}$/
const EVENT_VIEW_ROUTE_NAME = 'event-view-username-event_name'

// i18n suffixes route names with the locale, e.g. `event-view-username-event_name-guest___en`
export const getEventLinkHeaderValue = (route: {
  name?: unknown
  params: Record<string, unknown>
}) => {
  const { event_name, username } = route.params

  if (
    typeof route.name !== 'string' ||
    !route.name.startsWith(EVENT_VIEW_ROUTE_NAME) ||
    typeof event_name !== 'string' ||
    typeof username !== 'string' ||
    !EVENT_LINK_PART_PATTERN.test(event_name) ||
    !EVENT_LINK_PART_PATTERN.test(username)
  )
    return

  return `${username}/${event_name}`
}
