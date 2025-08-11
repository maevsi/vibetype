import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AccountByUsernameQueryVariables } from '~~/gql/generated/graphql'

export const accountByUsernameQuery = graphql(`
  query AccountByUsername($username: String!) {
    accountByUsername(username: $username) {
      ...AccountItem
    }
  }
`)

export const useAccountByUsernameQuery = (
  variables: AccountByUsernameQueryVariables,
) =>
  useQuery({
    query: accountByUsernameQuery,
    variables,
  })
