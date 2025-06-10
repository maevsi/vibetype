import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventFormatMutation = graphql(`
  mutation CreatePreferenceEventFormat($input: PreferenceEventFormatInput!) {
    createPreferenceEventFormat(input: { preferenceEventFormat: $input }) {
      preferenceEventFormat {
        ...PreferenceEventFormatItem
      }
    }
  }
`)

export const useCreatePreferenceEventFormatMutation = () =>
  useMutation(createPreferenceEventFormatMutation)
