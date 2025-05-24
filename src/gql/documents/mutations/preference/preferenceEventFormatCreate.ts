import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreatePreferenceEventFormatMutation = () =>
  useMutation(
    graphql(`
      mutation CreatePreferenceEventFormat(
        $input: AccountPreferenceEventFormatInput!
      ) {
        createAccountPreferenceEventFormat(
          input: { accountPreferenceEventFormat: $input }
        ) {
          accountPreferenceEventFormat {
            ...PreferenceEventFormatItem
          }
        }
      }
    `),
  )
