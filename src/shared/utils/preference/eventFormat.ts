import { useQuery } from '@urql/vue'
import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

// Shared with `shared/utils/urql.ts`'s graphcache config, which needs the
// exact same query object to patch the cache after create/delete mutations.
export const PreferenceEventFormatItem = graphql(`
  fragment PreferenceEventFormatItem on PreferenceEventFormat {
    formatId
    id
  }
`)

export const getPreferenceEventFormatItem = (
  fragment?: FragmentType<typeof PreferenceEventFormatItem> | null,
) => useFragment(PreferenceEventFormatItem, fragment)

export const allPreferenceEventFormatsQuery = graphql(`
  query AllPreferenceEventFormats {
    allPreferenceEventFormats {
      nodes {
        ...PreferenceEventFormatItem
      }
    }
  }
`)

export const useAllPreferenceEventFormatsQuery = () =>
  useQuery({ query: allPreferenceEventFormatsQuery })
