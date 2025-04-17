import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useAccountDeleteMutation = () =>
  useMutation(
    graphql(`
      mutation accountDelete($password: String!) {
        accountDelete(input: { password: $password }) {
          clientMutationId
        }
      }
    `),
  )
