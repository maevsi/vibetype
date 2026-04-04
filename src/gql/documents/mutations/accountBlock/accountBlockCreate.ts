import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createAccountBlockMutation = graphql(`
  mutation CreateAccountBlock($input: CreateAccountBlockInput!) {
    createAccountBlock(input: $input) {
      clientMutationId
    }
  }
`)

export const useCreateAccountBlockMutation = () =>
  useMutation(createAccountBlockMutation)
