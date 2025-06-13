import {
  useFragment,
  type FragmentType,
} from '~~/gql/generated/fragment-masking'
import { graphql } from '~~/gql/generated/gql'

export const AccountItem = graphql(`
  fragment AccountItem on Account {
    nodeId
    id
    username
  }
`)

export const getAccountItem = (
  fragment?: FragmentType<typeof AccountItem> | null,
) => useFragment(AccountItem, fragment)
