import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountRegistrationRefreshMutation = graphql(`
  mutation AccountRegistrationRefresh(
    $input: AccountRegistrationRefreshInput!
  ) {
    accountRegistrationRefresh(input: $input) {
      clientMutationId
    }
  }
`)

export const useAccountRegistrationRefreshMutation = () =>
  useMutation(accountRegistrationRefreshMutation)
