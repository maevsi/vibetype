import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useEventFavoriteByCreatedByAndEventIdQuery = (variables: {
  createdBy: string
  eventId: string
}) => {
  return useQuery({
    query: graphql(`
      query eventFavoriteByCreatedByAndEventId(
        $createdBy: UUID!
        $eventId: UUID!
      ) {
        eventFavoriteByCreatedByAndEventId(
          createdBy: $createdBy
          eventId: $eventId
        ) {
          id
          nodeId
          eventId
        }
      }
    `),
    variables,
  })
}
