import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useUpdateDeviceMutation = () =>
  useMutation(
    graphql(`
      mutation updateDevice($updateDeviceInput: UpdateDeviceByCreatedByAndFcmTokenInput!) {
        updateDevice($updateDeviceInput) {
          clientMutationId
        }
      }
    `),
  )
