import {
  useFragment,
  type FragmentType,
} from '~~/gql/generated/fragment-masking'
import { graphql } from '~~/gql/generated/gql'

export const UploadItem = graphql(`
  fragment UploadItem on Upload {
    id
    nodeId
    accountId
    sizeByte
    storageKey
  }
`)

export const getUploadItem = (
  fragment?: FragmentType<typeof UploadItem> | null,
) => useFragment(UploadItem, fragment)
