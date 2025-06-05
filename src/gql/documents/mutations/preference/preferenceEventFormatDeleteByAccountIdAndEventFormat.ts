import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventFormatByAccountIdAndFormatIdMutation =
  graphql(`
    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(
      $input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput!
    ) {
      deletePreferenceEventFormatByAccountIdAndFormatId(input: $input) {
        deletedPreferenceEventFormatId
      }
    }
  `)

export const useDeletePreferenceEventFormatByAccountIdAndFormatIdMutation =
  () => useMutation(deletePreferenceEventFormatByAccountIdAndFormatIdMutation)
