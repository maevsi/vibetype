import { graphql } from '~~/gql/generated'

// Events without an explicit `end` are assumed to last this long from `start`
// when deciding whether they've ended, matching typical event durations.
const EVENT_END_GRACE_PERIOD_MS = 12 * 60 * 60 * 1000

export const eventHasEnded = (
  event: { end?: string | null; start: string },
  now: Date,
): boolean =>
  event.end
    ? now >= new Date(event.end)
    : now >=
      new Date(new Date(event.start).getTime() + EVENT_END_GRACE_PERIOD_MS)

// Shared field-shape contract for `Event` data drilled through many
// components (see `Pick<EventItemFragment, ...>` usages). Not spread into
// any operation itself; each page fetches its own tailored `Event` fields.
export const EventItem = graphql(`
  fragment EventItem on Event {
    accountByCreatedBy {
      id
      rowId
      username
    }
    createdBy
    description
    end
    eventCategoryMappingsByEventId {
      nodes {
        categoryId
        eventCategoryByCategoryId {
          name
        }
        id
      }
    }
    eventFormatMappingsByEventId {
      nodes {
        eventFormatByFormatId {
          name
        }
        formatId
        id
      }
    }
    guestCountMaximum
    id
    isArchived
    isInPerson
    isRemote
    name
    rowId
    slug
    start
    url
    visibility
  }
`)
