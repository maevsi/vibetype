import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useEventUnfavoriteMutation = () =>
  useMutation(
    graphql(`
      mutation deleteEventFavorite($nodeId: ID!) {
        deleteEventFavorite(input: { nodeId: $nodeId }) {
          eventFavorite {
            ...EventFavoriteItem
          }
        }
      }
    `),
  )
