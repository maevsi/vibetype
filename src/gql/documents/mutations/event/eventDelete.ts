import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const eventDeleteMutation = graphql(`
  mutation EventDelete($input: EventDeleteInput!) {
    eventDelete(input: $input) {
      clientMutationId
      result {
        ...EventItem
      }
    }
  }
`)

export const useEventDeleteMutation = () => useMutation(eventDeleteMutation)
