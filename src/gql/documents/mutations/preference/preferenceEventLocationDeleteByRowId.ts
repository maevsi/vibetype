import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deletePreferenceEventLocationByRowIdMutation = graphql(`
  mutation DeletePreferenceEventLocationByRowId(
    $input: DeletePreferenceEventLocationByRowIdInput!
  ) {
    deletePreferenceEventLocationByRowId(input: $input) {
      deletedPreferenceEventLocationId
    }
  }
`)

export const useDeletePreferenceEventLocationByRowIdMutation = () =>
  useMutation(deletePreferenceEventLocationByRowIdMutation)
