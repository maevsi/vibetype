import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventSizeMutation = graphql(`
  mutation CreatePreferenceEventSize($input: CreatePreferenceEventSizeInput!) {
    createPreferenceEventSize(input: $input) {
      clientMutationId
    }
  }
`)

export const useCreatePreferenceEventSizeMutation = () =>
  useMutation(createPreferenceEventSizeMutation)
