import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountPasswordResetRequestMutation = graphql(`
  mutation AccountPasswordResetRequest(
    $input: AccountPasswordResetRequestInput!
  ) {
    accountPasswordResetRequest(input: $input) {
      clientMutationId
    }
  }
`)

export const useAccountPasswordResetRequestMutation = () =>
  useMutation(accountPasswordResetRequestMutation)
