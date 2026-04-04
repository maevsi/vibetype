import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const PreferenceEventLocationItem = graphql(`
  fragment PreferenceEventLocationItem on PreferenceEventLocation {
    createdAt
    createdBy
    id
    location {
      latitude
      longitude
    }
    radius
    rowId
  }
`)

export const getPreferenceEventLocationItem = (
  fragment?: FragmentType<typeof PreferenceEventLocationItem> | null,
) => useFragment(PreferenceEventLocationItem, fragment)
