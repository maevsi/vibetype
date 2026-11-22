import { graphql } from '~~/gql/generated'

// like the server's `has_ended`, an event without an end ends at its start, following RFC 5545
export const eventHasEnded = (
  event: { end?: string | null; start: string },
  now: Date,
): boolean => now >= new Date(event.end ?? event.start)

export const getEventState = (
  event: { end?: string | null; start: string },
  now: Date,
): 'ended' | 'ongoing' | 'upcoming' =>
  now < new Date(event.start)
    ? 'upcoming'
    : eventHasEnded(event, now)
      ? 'ended'
      : 'ongoing'

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
          id
          name
        }
        id
      }
    }
    eventFormatMappingsByEventId {
      nodes {
        eventFormatByFormatId {
          id
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
