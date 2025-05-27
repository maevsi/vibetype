import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const profilePictureSetMutation = graphql(`
  mutation ProfilePictureSet($uploadId: UUID!) {
    profilePictureSet(input: { uploadId: $uploadId }) {
      clientMutationId
    }
  }
`)

export const useProfilePictureSetMutation = () =>
  useMutation(profilePictureSetMutation)
