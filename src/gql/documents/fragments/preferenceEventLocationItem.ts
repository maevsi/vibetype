import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const PreferenceEventLocationItem = graphql(`
  fragment PreferenceEventLocationItem on AccountPreferenceEventLocation {
    createdAt
    createdBy
    id
    nodeId
    radius
    location {
      latitude
      longitude
    }
  }
`)

export const getPreferenceEventLocationItem = (
  fragment?: FragmentType<typeof PreferenceEventLocationItem> | null,
) => useFragment(PreferenceEventLocationItem, fragment)
