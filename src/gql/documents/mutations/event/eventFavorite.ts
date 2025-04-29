import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useEventFavoriteMutation = () =>
  useMutation(
    graphql(`
      mutation createEventFavorite($eventId: UUID!) {
        createEventFavorite(input: { eventFavorite: { eventId: $eventId } }) {
          clientMutationId
          eventFavorite {
            id
            nodeId
            eventId
          }
        }
      }
    `),
  )
