import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventSizeByAccountIdAndEventSizeMutation = graphql(
  `
    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(
      $input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput!
    ) {
      deletePreferenceEventSizeByAccountIdAndEventSize(input: $input) {
        clientMutationId
      }
    }
  `,
)

export const useDeletePreferenceEventSizeByAccountIdAndEventSizeMutation = () =>
  useMutation(deletePreferenceEventSizeByAccountIdAndEventSizeMutation)
