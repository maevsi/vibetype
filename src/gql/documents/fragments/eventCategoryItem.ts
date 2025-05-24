import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const EventCategoryItem = graphql(`
  fragment EventCategoryItem on EventCategory {
    id
    name
  }
`)

export const getEventCategoryItem = (
  fragment?: FragmentType<typeof EventCategoryItem> | null,
) => useFragment(EventCategoryItem, fragment)
