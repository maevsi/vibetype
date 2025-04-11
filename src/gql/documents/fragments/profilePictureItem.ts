import {
  useFragment,
  type FragmentType,
} from '~~/gql/generated/fragment-masking'
import { graphql } from '~~/gql/generated/gql'

export const ProfilePictureItem = graphql(`
  fragment ProfilePictureItem on ProfilePicture {
    id
    nodeId
    accountId
    uploadByUploadId {
      ...UploadItem
    }
  }
`)

export const getProfilePictureItem = (
  fragment?: FragmentType<typeof ProfilePictureItem> | null,
) => useFragment(ProfilePictureItem, fragment)
