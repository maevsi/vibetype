import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventLocationByIdMutation = graphql(`
  mutation DeletePreferenceEventLocationById(
    $input: DeletePreferenceEventLocationByIdInput!
  ) {
    deletePreferenceEventLocationById(input: $input) {
      deletedPreferenceEventLocationId
    }
  }
`)

export const useDeletePreferenceEventLocationByIdMutation = () =>
  useMutation(deletePreferenceEventLocationByIdMutation)
