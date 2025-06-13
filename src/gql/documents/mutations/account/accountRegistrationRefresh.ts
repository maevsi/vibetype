import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const accountRegistrationRefreshMutation = graphql(`
  mutation AccountRegistrationRefresh($accountId: UUID!, $language: String!) {
    accountRegistrationRefresh(
      input: { language: $language, accountId: $accountId }
    ) {
      clientMutationId
    }
  }
`)

export const useAccountRegistrationRefreshMutation = () =>
  useMutation(accountRegistrationRefreshMutation)
