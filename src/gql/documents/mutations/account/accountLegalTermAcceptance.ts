import { graphql } from '~~/gql/generated/gql'
import { useMutation } from '@urql/vue'

export const useCreateLegalTermAcceptanceMutation = () =>
  useMutation(
    graphql(`
      mutation CreateLegalTermAcceptance(
        $input: CreateLegalTermAcceptanceInput!
      ) {
        createLegalTermAcceptance(input: $input) {
          clientMutationId
        }
      }
    `),
  )
