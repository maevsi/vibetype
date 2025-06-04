import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventLocationMutation = graphql(`
  mutation CreatePreferenceEventLocation(
    $input: AccountPreferenceEventLocationInput!
  ) {
    createAccountPreferenceEventLocation(
      input: { accountPreferenceEventLocation: $input }
    ) {
      accountPreferenceEventLocation {
        ...PreferenceEventLocationItem
      }
    }
  }
`)

export const useCreatePreferenceEventLocationMutation = () =>
  useMutation(createPreferenceEventLocationMutation)
