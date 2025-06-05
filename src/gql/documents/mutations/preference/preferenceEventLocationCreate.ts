import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventLocationMutation = graphql(`
  mutation CreatePreferenceEventLocation(
    $input: PreferenceEventLocationInput!
  ) {
    createPreferenceEventLocation(input: { preferenceEventLocation: $input }) {
      preferenceEventLocation {
        ...PreferenceEventLocationItem
      }
    }
  }
`)

export const useCreatePreferenceEventLocationMutation = () =>
  useMutation(createPreferenceEventLocationMutation)
