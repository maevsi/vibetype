import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateEventByRowIdMutation = graphql(`
  mutation updateEventByRowId($input: UpdateEventByRowIdInput!) {
    updateEventByRowId(input: $input) {
      event {
        ...EventItem
      }
    }
  }
`)

export const useUpdateEventByRowIdMutation = () =>
  useMutation(updateEventByRowIdMutation)
