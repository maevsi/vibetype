import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventFormatByAccountIdAndFormatIdMutation =
  graphql(`
    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(
      $input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput!
    ) {
      deleteAccountPreferenceEventFormatByAccountIdAndFormatId(input: $input) {
        deletedAccountPreferenceEventFormatId
      }
    }
  `)

export const useDeletePreferenceEventFormatByAccountIdAndFormatIdMutation =
  () => useMutation(deletePreferenceEventFormatByAccountIdAndFormatIdMutation)
