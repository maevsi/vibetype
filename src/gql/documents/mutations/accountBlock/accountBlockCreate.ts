import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateAccountBlockMutation = () =>
  useMutation(
    graphql(`
      mutation CreateAccountBlock($accountBlockInput: AccountBlockInput!) {
        createAccountBlock(input: { accountBlock: $accountBlockInput }) {
          clientMutationId
        }
      }
    `),
  )
