import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useAccountDeleteMutation = () =>
  useMutation(
    graphql(`
      mutation AccountDelete($password: String!) {
        accountDelete(input: { password: $password }) {
          clientMutationId
        }
      }
    `),
  )
