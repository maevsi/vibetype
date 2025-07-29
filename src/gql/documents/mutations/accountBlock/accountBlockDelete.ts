import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteAccountBlockMutation = graphql(`
  mutation DeleteAccountBlock($nodeId: ID!) {
    deleteAccountBlock(input: { nodeId: $nodeId }) {
      clientMutationId
    }
  }
`)

export const useDeleteAccountBlockMutation = () =>
  useMutation(deleteAccountBlockMutation)
