import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteDeviceMutation = graphql(`
  mutation deleteDeviceByCreatedByAndFcmToken(
    $deleteDeviceInput: DeleteDeviceByCreatedByAndFcmTokenInput!
  ) {
    deleteDeviceByCreatedByAndFcmToken(input: $deleteDeviceInput) {
      clientMutationId
    }
  }
`)

export const useDeleteDeviceMutation = () => useMutation(deleteDeviceMutation)
