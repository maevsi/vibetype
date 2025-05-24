import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreatePreferenceEventSizeMutation = () =>
  useMutation(
    graphql(`
      mutation CreatePreferenceEventSize(
        $input: AccountPreferenceEventSizeInput!
      ) {
        createAccountPreferenceEventSize(
          input: { accountPreferenceEventSize: $input }
        ) {
          clientMutationId
        }
      }
    `),
  )
