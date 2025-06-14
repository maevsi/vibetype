import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const EventFavoriteItem = graphql(`
  fragment EventFavoriteItem on EventFavorite {
    createdBy
    eventId
    id
    nodeId
  }
`)

export const getEventFavoriteItem = (
  fragment?: FragmentType<typeof EventFavoriteItem> | null,
) => useFragment(EventFavoriteItem, fragment)
