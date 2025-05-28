import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllLegalTermsQueryVariables } from '~~/gql/generated/graphql'

export const allLegalTermsQuery = graphql(`
  query AllLegalTerms($language: String) {
    allLegalTerms(condition: { language: $language }) {
      nodes {
        ...LegalTermItem
      }
    }
  }
`)

export const useAllLegalTermsQuery = (
  variables?: AllLegalTermsQueryVariables,
) =>
  useQuery({
    query: allLegalTermsQuery,
    variables,
  })
