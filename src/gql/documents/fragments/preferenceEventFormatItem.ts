import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const PreferenceEventFormatItem = graphql(`
  fragment PreferenceEventFormatItem on PreferenceEventFormat {
    accountId
    formatId
    id
    rowId
  }
`)

export const getPreferenceEventFormatItem = (
  fragment?: FragmentType<typeof PreferenceEventFormatItem> | null,
) => useFragment(PreferenceEventFormatItem, fragment)
