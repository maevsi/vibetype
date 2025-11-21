import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateDeviceMutation = graphql(`
  mutation updateDeviceByCreatedByAndFcmToken(
    $updateDeviceInput: UpdateDeviceByCreatedByAndFcmTokenInput!
  ) {
    updateDeviceByCreatedByAndFcmToken(input: $updateDeviceInput) {
      clientMutationId
    }
  }
`)

export const useUpdateDeviceMutation = () => useMutation(updateDeviceMutation)
