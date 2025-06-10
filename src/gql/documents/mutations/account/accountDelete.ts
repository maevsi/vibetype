import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const accountDeleteMutation = graphql(`
  mutation AccountDelete($password: String!) {
    accountDelete(input: { password: $password }) {
      clientMutationId
    }
  }
`)

export const useAccountDeleteMutation = () => useMutation(accountDeleteMutation)
