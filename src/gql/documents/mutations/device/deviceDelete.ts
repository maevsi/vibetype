import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteDeviceByCreatedByAndFcmTokenMutation = graphql(`
  mutation DeleteDeviceByCreatedByAndFcmToken(
    $input: DeleteDeviceByCreatedByAndFcmTokenInput!
  ) {
    deleteDeviceByCreatedByAndFcmToken(input: $input) {
      clientMutationId
    }
  }
`)

export const useDeleteDeviceByCreatedByAndFcmTokenMutation = () =>
  useMutation(deleteDeviceByCreatedByAndFcmTokenMutation)
