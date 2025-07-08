import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

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
