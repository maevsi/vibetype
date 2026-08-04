import { useQuery } from '@urql/vue'
import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

// Shared with `shared/utils/urql.ts`'s graphcache config, which needs the
// exact same query object to patch the cache after create/delete mutations.
export const PreferenceEventLocationItem = graphql(`
  fragment PreferenceEventLocationItem on PreferenceEventLocation {
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

export const allPreferenceEventLocationsQuery = graphql(`
  query AllPreferenceEventLocations {
    allPreferenceEventLocations {
      nodes {
        ...PreferenceEventLocationItem
      }
    }
  }
`)

export const useAllPreferenceEventLocationsQuery = () =>
  useQuery({ query: allPreferenceEventLocationsQuery })
