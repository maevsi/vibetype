import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountPasswordChangeMutation = graphql(`
  mutation AccountPasswordChange(
    $passwordCurrent: String!
    $passwordNew: String!
  ) {
    accountPasswordChange(
      input: { passwordCurrent: $passwordCurrent, passwordNew: $passwordNew }
    ) {
      clientMutationId
    }
  }
`)

export const useAccountPasswordChangeMutation = () =>
  useMutation(accountPasswordChangeMutation)
