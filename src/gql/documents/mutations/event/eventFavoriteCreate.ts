import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useEventFavoriteMutation = () =>
  useMutation(
    graphql(`
      mutation createEventFavorite($eventId: UUID!, $createdBy: UUID!) {
        createEventFavorite(
          input: { eventFavorite: { eventId: $eventId, createdBy: $createdBy } }
        ) {
          eventFavorite {
            ...EventFavoriteItem
          }
        }
      }
    `),
  )
