import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventLocationByIdMutation = graphql(`
  mutation DeletePreferenceEventLocationById(
    $input: DeleteAccountPreferenceEventLocationByIdInput!
  ) {
    deleteAccountPreferenceEventLocationById(input: $input) {
      deletedAccountPreferenceEventLocationId
    }
  }
`)

export const useDeletePreferenceEventLocationByIdMutation = () =>
  useMutation(deletePreferenceEventLocationByIdMutation)
