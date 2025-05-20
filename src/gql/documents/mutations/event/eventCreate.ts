import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateEventMutation = () =>
  useMutation(
    graphql(`
      mutation CreateEvent($input: EventInput!) {
        createEvent(input: { event: $input }) {
          event {
            ...EventItem
          }
        }
      }
    `),
  )
