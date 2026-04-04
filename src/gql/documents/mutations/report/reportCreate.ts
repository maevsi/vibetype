import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createReportMutation = graphql(`
  mutation CreateReport($input: CreateReportInput!) {
    createReport(input: $input) {
      clientMutationId
    }
  }
`)

export const useCreateReportMutation = () => useMutation(createReportMutation)
