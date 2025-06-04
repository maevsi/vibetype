import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createAccountPreferenceEventCategoryMutation = graphql(`
  mutation CreatePreferenceEventCategory(
    $input: AccountPreferenceEventCategoryInput!
  ) {
    createAccountPreferenceEventCategory(
      input: { accountPreferenceEventCategory: $input }
    ) {
      accountPreferenceEventCategory {
        ...PreferenceEventCategoryItem
      }
    }
  }
`)

export const useCreatePreferenceEventCategoryMutation = () =>
  useMutation(createAccountPreferenceEventCategoryMutation)
