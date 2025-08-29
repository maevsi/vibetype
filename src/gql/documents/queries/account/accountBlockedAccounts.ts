import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountBlockedAccountsQuery = graphql(`
  query AccountBlockedAccounts {
    accountBlockedAccounts {
      nodes {
        id
        username
        description
        imprint
        storageKey
      }
    }
  }
`)

export const useAccountBlockedAccountsQuery = () =>
  useQuery({
    query: accountBlockedAccountsQuery,
  })
