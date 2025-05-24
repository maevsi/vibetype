import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation =
  () =>
    useMutation(
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
      `),
    )
