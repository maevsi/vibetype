import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useDeleteUploadByIdMutation = () =>
  useMutation(
    graphql(`
      mutation DeleteUploadById($id: UUID!) {
        deleteUploadById(input: { id: $id }) {
          clientMutationId
          upload {
            ...UploadItem
          }
        }
      }
    `),
  )
