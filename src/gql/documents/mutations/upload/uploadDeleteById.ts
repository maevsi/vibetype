import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteUploadByIdMutation = graphql(`
  mutation DeleteUploadById($id: UUID!) {
    deleteUploadById(input: { id: $id }) {
      clientMutationId
      upload {
        ...UploadItem
      }
    }
  }
`)

export const useDeleteUploadByIdMutation = () =>
  useMutation(deleteUploadByIdMutation)
