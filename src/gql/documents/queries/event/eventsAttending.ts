import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AccountEventsAttendingQueryVariables } from '~~/gql/generated/graphql'

export const useAccountEventsAttendingQuery = (
  variables: AccountEventsAttendingQueryVariables,
) =>
  useQuery({
    query: graphql(`
      query AccountEventsAttending($accountId: UUID!) {
        allContacts(condition: { accountId: $accountId }, first: 1) {
          nodes {
            id
            guestsByContactId {
              nodes {
                eventByEventId {
                  ...EventItem
                }
              }
            }
          }
        }
      }
    `),
    variables,
  })
