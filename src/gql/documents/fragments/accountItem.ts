import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const AccountItem = graphql(`
  fragment AccountItem on Account {
    description
    id
    rowId
    username
  }
`)

export const getAccountItem = (
  fragment?: FragmentType<typeof AccountItem> | null,
) => useFragment(AccountItem, fragment)
