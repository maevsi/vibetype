import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useUpdateDeviceMutation = () =>
  useMutation(
    graphql(`
      mutation updateDeviceByCreatedByAndFcmToken(
        $updateDeviceInput: UpdateDeviceByCreatedByAndFcmTokenInput!
      ) {
        updateDeviceByCreatedByAndFcmToken(input: $updateDeviceInput) {
          clientMutationId
        }
      }
    `),
  )
