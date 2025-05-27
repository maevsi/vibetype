import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createReportMutation = graphql(`
  mutation CreateReport($reportInput: ReportInput!) {
    createReport(input: { report: $reportInput }) {
      clientMutationId
    }
  }
`)

export const useCreateReportMutation = () => useMutation(createReportMutation)
