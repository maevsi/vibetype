import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllUploadsQueryVariables } from '~~/gql/generated/graphql'

export const useAllUploadsQuery = (variables: AllUploadsQueryVariables) =>
  useQuery({
    query: graphql(`
      query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {
        allUploads(
          after: $after
          condition: { createdBy: $createdBy }
          first: $first
        ) {
          nodes {
            ...UploadItem
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalCount
        }
      }
    `),
    variables,
  })
