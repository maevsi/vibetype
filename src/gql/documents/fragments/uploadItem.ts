import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const UploadItem = graphql(`
  fragment UploadItem on Upload {
    createdBy
    id
    rowId
    sizeByte
    storageKey
  }
`)

export const getUploadItem = (
  fragment?: FragmentType<typeof UploadItem> | null,
) => useFragment(UploadItem, fragment)
