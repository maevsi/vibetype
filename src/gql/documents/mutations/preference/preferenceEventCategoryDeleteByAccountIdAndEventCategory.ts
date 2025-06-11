import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation =
  graphql(`
    mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(
      $input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput!
    ) {
      deletePreferenceEventCategoryByAccountIdAndCategoryId(input: $input) {
        deletedPreferenceEventCategoryId
      }
    }
  `)

export const useDeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation =
  () =>
    useMutation(deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation)
