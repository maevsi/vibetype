import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateReportMutation = () =>
  useMutation(
    graphql(`
      mutation createReport($reportInput: ReportInput!) {
        createReport(input: { report: $reportInput }) {
          clientMutationId
        }
      }
    `),
  )
