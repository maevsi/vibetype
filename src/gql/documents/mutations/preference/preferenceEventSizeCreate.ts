import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createPreferenceEventSizeMutation = graphql(`
  mutation CreatePreferenceEventSize($input: AccountPreferenceEventSizeInput!) {
    createAccountPreferenceEventSize(
      input: { accountPreferenceEventSize: $input }
    ) {
      clientMutationId
    }
  }
`)

export const useCreatePreferenceEventSizeMutation = () =>
  useMutation(createPreferenceEventSizeMutation)
