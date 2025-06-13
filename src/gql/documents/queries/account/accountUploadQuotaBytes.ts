import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'
import type { AccountUploadQuotaBytesQueryVariables } from '~~/gql/generated/graphql'

export const accountUploadQuotaBytesQuery = graphql(`
  query AccountUploadQuotaBytes {
    accountUploadQuotaBytes
  }
`)

export const useAccountUploadQuotaBytesQuery = (
  variables?: AccountUploadQuotaBytesQueryVariables,
) =>
  useQuery({
    query: accountUploadQuotaBytesQuery,
    variables,
  })
