import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllUploadsQueryVariables } from '~~/gql/generated/graphql'

export const allUploadsQuery = graphql(`
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
`)

export const useAllUploadsQuery = (
  variables: MaybeRefOrGetter<AllUploadsQueryVariables>,
) =>
  useQuery({
    query: allUploadsQuery,
    variables,
  })
