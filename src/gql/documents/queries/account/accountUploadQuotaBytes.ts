import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'
import type { AccountUploadQuotaBytesQueryVariables } from '~~/gql/generated/graphql'

export const useAccountUploadQuotaBytesQuery = (
  variables: AccountUploadQuotaBytesQueryVariables,
) =>
  useQuery({
    query: graphql(`
      query accountUploadQuotaBytes {
        accountUploadQuotaBytes
      }
    `),
    variables,
  })
