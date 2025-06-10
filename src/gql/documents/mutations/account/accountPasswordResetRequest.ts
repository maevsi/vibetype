import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountPasswordResetRequestMutation = graphql(`
  mutation AccountPasswordResetRequest(
    $emailAddress: String!
    $language: String!
  ) {
    accountPasswordResetRequest(
      input: { emailAddress: $emailAddress, language: $language }
    ) {
      clientMutationId
    }
  }
`)

export const useAccountPasswordResetRequestMutation = () =>
  useMutation(accountPasswordResetRequestMutation)
