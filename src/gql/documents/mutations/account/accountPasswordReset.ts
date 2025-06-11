import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const accountPasswordResetMutation = graphql(`
  mutation AccountPasswordReset($code: UUID!, $password: String!) {
    accountPasswordReset(input: { code: $code, password: $password }) {
      clientMutationId
    }
  }
`)

export const useAccountPasswordResetMutation = () =>
  useMutation(accountPasswordResetMutation)
