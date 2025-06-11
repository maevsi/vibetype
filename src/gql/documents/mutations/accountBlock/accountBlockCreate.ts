import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createAccountBlockMutation = graphql(`
  mutation CreateAccountBlock($accountBlockInput: AccountBlockInput!) {
    createAccountBlock(input: { accountBlock: $accountBlockInput }) {
      clientMutationId
    }
  }
`)

export const useCreateAccountBlockMutation = () =>
  useMutation(createAccountBlockMutation)
