import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createUploadMutation = graphql(`
  mutation CreateUpload($input: UploadInput!) {
    createUpload(input: { upload: $input }) {
      clientMutationId
      upload {
        id
      }
    }
  }
`)

export const useCreateUploadMutation = () => useMutation(createUploadMutation)
