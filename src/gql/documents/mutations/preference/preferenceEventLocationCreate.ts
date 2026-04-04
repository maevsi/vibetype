import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventLocationMutation = graphql(`
  mutation CreatePreferenceEventLocation(
    $input: CreatePreferenceEventLocationInput!
  ) {
    createPreferenceEventLocation(input: $input) {
      preferenceEventLocation {
        ...PreferenceEventLocationItem
      }
    }
  }
`)

export const useCreatePreferenceEventLocationMutation = () =>
  useMutation(createPreferenceEventLocationMutation)
