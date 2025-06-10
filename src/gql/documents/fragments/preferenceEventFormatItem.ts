import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

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
