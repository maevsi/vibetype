import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventSizeMutation = graphql(`
  mutation CreatePreferenceEventSize($input: PreferenceEventSizeInput!) {
    createPreferenceEventSize(input: { preferenceEventSize: $input }) {
      clientMutationId
    }
  }
`)

export const useCreatePreferenceEventSizeMutation = () =>
  useMutation(createPreferenceEventSizeMutation)
