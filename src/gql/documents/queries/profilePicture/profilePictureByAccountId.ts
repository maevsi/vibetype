import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { ProfilePictureByAccountIdQueryVariables } from '~~/gql/generated/graphql'

export const profilePictureByAccountIdQuery = graphql(`
  query ProfilePictureByAccountId($accountId: UUID!) {
    profilePictureByAccountId(accountId: $accountId) {
      ...ProfilePictureItem
    }
  }
`)

export const useProfilePictureByAccountIdQuery = (
  variables?: ProfilePictureByAccountIdQueryVariables,
) =>
  useQuery({
    query: profilePictureByAccountIdQuery,
    variables,
  })
