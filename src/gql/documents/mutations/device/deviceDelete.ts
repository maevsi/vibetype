import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeleteDeviceMutation = () =>
  useMutation(
    graphql(`
      mutation deleteDeviceByCreatedByAndFcmToken(
        $deleteDeviceInput: DeleteDeviceByCreatedByAndFcmTokenInput!
      ) {
        deleteDeviceByCreatedByAndFcmToken(input: $deleteDeviceInput) {
          clientMutationId
        }
      }
    `),
  )
