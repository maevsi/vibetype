import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createEventMutation = graphql(`
  mutation CreateEvent($input: EventInput!) {
    createEvent(input: { event: $input }) {
      event {
        ...EventItem
      }
    }
  }
`)

export const useCreateEventMutation = () => useMutation(createEventMutation)
