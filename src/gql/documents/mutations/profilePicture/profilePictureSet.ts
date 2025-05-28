import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useProfilePictureSetMutation = () =>
  useMutation(
    graphql(`
      mutation ProfilePictureSet($uploadId: UUID!) {
        profilePictureSet(input: { uploadId: $uploadId }) {
          clientMutationId
        }
      }
    `),
  )
