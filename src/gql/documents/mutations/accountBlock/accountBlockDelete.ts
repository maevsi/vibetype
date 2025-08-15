import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteAccountBlockMutation = graphql(`
  mutation DeleteAccountBlock($blockedAccountId: UUID!, $createdBy: UUID!) {
    deleteAccountBlockByCreatedByAndBlockedAccountId(
      input: { createdBy: $createdBy, blockedAccountId: $blockedAccountId }
    ) {
      clientMutationId
    }
  }
`)

export const useDeleteAccountBlockMutation = () =>
  useMutation(deleteAccountBlockMutation)
