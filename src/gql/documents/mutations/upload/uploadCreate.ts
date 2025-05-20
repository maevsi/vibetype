import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateUploadMutation = () =>
  useMutation(
    graphql(`
      mutation CreateUpload($input: UploadInput!) {
        createUpload(input: { upload: $input }) {
          clientMutationId
          upload {
            id
          }
        }
      }
    `),
  )
