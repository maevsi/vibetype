import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventFormatMutation = graphql(`
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
`)

export const useCreatePreferenceEventFormatMutation = () =>
  useMutation(createPreferenceEventFormatMutation)
