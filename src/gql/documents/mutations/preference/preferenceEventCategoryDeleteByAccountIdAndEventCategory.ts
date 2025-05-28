import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation =
  graphql(`
    mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(
      $input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput!
    ) {
      deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId(
        input: $input
      ) {
        deletedAccountPreferenceEventCategoryId
      }
    }
  `)

export const useDeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation =
  () =>
    useMutation(deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation)
