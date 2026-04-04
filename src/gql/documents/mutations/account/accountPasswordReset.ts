import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountPasswordResetMutation = graphql(`
  mutation AccountPasswordReset($input: AccountPasswordResetInput!) {
    accountPasswordReset(input: $input) {
      clientMutationId
    }
  }
`)

export const useAccountPasswordResetMutation = () =>
  useMutation(accountPasswordResetMutation)
