import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateEventByIdMutation = graphql(`
  mutation UpdateEventById($id: UUID!, $eventPatch: EventPatch!) {
    updateEventById(input: { id: $id, eventPatch: $eventPatch }) {
      event {
        ...EventItem
      }
    }
  }
`)

export const useUpdateEventByIdMutation = () =>
  useMutation(updateEventByIdMutation)
