import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeletePreferenceEventSizeByAccountIdAndEventSizeMutation = () =>
  useMutation(
    graphql(`
      mutation DeletePreferenceEventSizeByAccountIdAndEventSize(
        $input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput!
      ) {
        deleteAccountPreferenceEventSizeByAccountIdAndEventSize(input: $input) {
          clientMutationId
        }
      }
    `),
  )
