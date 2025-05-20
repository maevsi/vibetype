import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useEventDeleteMutation = () =>
  useMutation(
    graphql(`
      mutation EventDelete($id: UUID!, $password: String!) {
        eventDelete(input: { id: $id, password: $password }) {
          clientMutationId
          event {
            ...EventItem
          }
        }
      }
    `),
  )
