import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const EventFormatItem = graphql(`
  fragment EventFormatItem on EventFormat {
    id
    name
  }
`)

export const getEventFormatItem = (
  fragment?: FragmentType<typeof EventFormatItem> | null,
) => useFragment(EventFormatItem, fragment)
