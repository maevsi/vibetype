import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createDeviceMutation = graphql(`
  mutation CreateDevice($input: CreateDeviceInput!) {
    createDevice(input: $input) {
      clientMutationId
    }
  }
`)

export const useCreateDeviceMutation = () => useMutation(createDeviceMutation)
