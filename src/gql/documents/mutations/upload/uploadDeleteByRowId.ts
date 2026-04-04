import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deleteUploadByRowIdMutation = graphql(`
  mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {
    deleteUploadByRowId(input: $input) {
      clientMutationId
      upload {
        ...UploadItem
      }
    }
  }
`)

export const useDeleteUploadByRowIdMutation = () =>
  useMutation(deleteUploadByRowIdMutation)
