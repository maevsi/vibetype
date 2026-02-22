import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const updateEventByRowIdMutation = graphql(`
  mutation updateEventByRowId($id: UUID!, $eventPatch: EventPatch!) {
    updateEventByRowId(input: { rowId: $id, eventPatch: $eventPatch }) {
      event {
        ...EventItem
      }
    }
  }
`)

export const useUpdateEventByRowIdMutation = () =>
  useMutation(updateEventByRowIdMutation)
