import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createDeviceMutation = graphql(`
  mutation createDevice($deviceInput: DeviceInput!) {
    createDevice(input: { device: $deviceInput }) {
      clientMutationId
    }
  }
`)

export const useCreateDeviceMutation = () => useMutation(createDeviceMutation)
