import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventCategoryMutation = graphql(`
  mutation CreatePreferenceEventCategory(
    $input: PreferenceEventCategoryInput!
  ) {
    createPreferenceEventCategory(input: { preferenceEventCategory: $input }) {
      preferenceEventCategory {
        ...PreferenceEventCategoryItem
      }
    }
  }
`)

export const useCreatePreferenceEventCategoryMutation = () =>
  useMutation(createPreferenceEventCategoryMutation)
