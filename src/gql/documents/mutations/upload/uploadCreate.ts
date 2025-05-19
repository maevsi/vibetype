import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateUploadMutation = () =>
  useMutation(
    graphql(`
      mutation createUpload($createUploadInput: CreateUploadInput!) {
        createUpload(input: $createUploadInput) {
          clientMutationId
          upload {
            id
          }
        }
      }
    `),
  )
