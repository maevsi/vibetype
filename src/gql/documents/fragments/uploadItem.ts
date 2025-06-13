import {
  useFragment,
  type FragmentType,
} from '~~/gql/generated/fragment-masking'
import { graphql } from '~~/gql/generated/gql'

export const UploadItem = graphql(`
  fragment UploadItem on Upload {
    id
    nodeId
    sizeByte
    storageKey
    createdBy
  }
`)

export const getUploadItem = (
  fragment?: FragmentType<typeof UploadItem> | null,
) => useFragment(UploadItem, fragment)
