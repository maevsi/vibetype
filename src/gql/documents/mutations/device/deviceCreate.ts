import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateDeviceMutation = () =>
  useMutation(
    graphql(`
      mutation createDevice($deviceInput: DeviceInput!) {
        createDevice(input: { device: $deviceInput }) {
          clientMutationId
        }
      }
    `),
  )
