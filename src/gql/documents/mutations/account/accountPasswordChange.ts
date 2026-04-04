import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountPasswordChangeMutation = graphql(`
  mutation AccountPasswordChange($input: AccountPasswordChangeInput!) {
    accountPasswordChange(input: $input) {
      clientMutationId
    }
  }
`)

export const useAccountPasswordChangeMutation = () =>
  useMutation(accountPasswordChangeMutation)
