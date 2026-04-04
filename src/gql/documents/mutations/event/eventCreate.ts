import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const createEventMutation = graphql(`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      event {
        ...EventItem
      }
    }
  }
`)

export const useCreateEventMutation = () => useMutation(createEventMutation)
