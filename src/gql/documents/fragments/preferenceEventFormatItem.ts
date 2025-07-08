import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const PreferenceEventFormatItem = graphql(`
  fragment PreferenceEventFormatItem on PreferenceEventFormat {
    nodeId
    accountId
    formatId
  }
`)

export const getPreferenceEventFormatItem = (
  fragment?: FragmentType<typeof PreferenceEventFormatItem> | null,
) => useFragment(PreferenceEventFormatItem, fragment)
