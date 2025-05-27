import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreatePreferenceEventLocationMutation = () =>
  useMutation(
    graphql(`
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
    `),
  )
