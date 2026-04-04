import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const EventCategoryItem = graphql(`
  fragment EventCategoryItem on EventCategory {
    id
    name
    rowId
  }
`)

export const getEventCategoryItem = (
  fragment?: FragmentType<typeof EventCategoryItem> | null,
) => useFragment(EventCategoryItem, fragment)
