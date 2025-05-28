import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventSizeByAccountIdAndEventSizeMutation = graphql(
  `
    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(
      $input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput!
    ) {
      deleteAccountPreferenceEventSizeByAccountIdAndEventSize(input: $input) {
        clientMutationId
      }
    }
  `,
)

export const useDeletePreferenceEventSizeByAccountIdAndEventSizeMutation = () =>
  useMutation(deletePreferenceEventSizeByAccountIdAndEventSizeMutation)
