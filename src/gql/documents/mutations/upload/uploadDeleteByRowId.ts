import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteUploadByRowIdMutation = graphql(`
  mutation DeleteUploadByRowId($id: UUID!) {
    deleteUploadByRowId(input: { rowId: $id }) {
      clientMutationId
      upload {
        ...UploadItem
      }
    }
  }
`)

export const useDeleteUploadByRowIdMutation = () =>
  useMutation(deleteUploadByRowIdMutation)
