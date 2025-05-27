import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeletePreferenceEventLocationByIdMutation = () =>
  useMutation(
    graphql(`
      mutation DeletePreferenceEventLocationById(
        $input: DeleteAccountPreferenceEventLocationByIdInput!
      ) {
        deleteAccountPreferenceEventLocationById(input: $input) {
          deletedAccountPreferenceEventLocationId
        }
      }
    `),
  )
