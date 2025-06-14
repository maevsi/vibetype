import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const AccountItem = graphql(`
  fragment AccountItem on Account {
    description
    id
    nodeId
    username
  }
`)

export const getAccountItem = (
  fragment?: FragmentType<typeof AccountItem> | null,
) => useFragment(AccountItem, fragment)
