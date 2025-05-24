import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeletePreferenceEventFormatByAccountIdAndFormatIdMutation =
  () =>
    useMutation(
      graphql(`
        mutation DeletePreferenceEventFormatByAccountIdAndFormatId(
          $input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput!
        ) {
          deleteAccountPreferenceEventFormatByAccountIdAndFormatId(
            input: $input
          ) {
            deletedAccountPreferenceEventFormatId
          }
        }
      `),
    )
