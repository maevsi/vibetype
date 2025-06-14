import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AccountEventsAttendingQueryVariables } from '~~/gql/generated/graphql'

export const useAccountEventsAttendingQuery = (
  variables: AccountEventsAttendingQueryVariables,
) =>
  useQuery({
    query: graphql(`
      query AccountEventsAttending($accountId: UUID!) {
        allContacts(condition: { accountId: $accountId }) {
          nodes {
            id
            guestsByContactId {
              nodes {
                feedback
                eventByEventId {
                  ...EventItem
                  eventFavoritesByEventId {
                    nodes {
                      ...EventFavoriteItem
                    }
                  }
                }
              }
            }
          }
        }
      }
    `),
    variables,
  })
