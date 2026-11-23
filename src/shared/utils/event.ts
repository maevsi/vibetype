import { graphql } from '~~/gql/generated'

// like the server's publication rule: a missing `publishedAt` is a draft, a future one is scheduled
export const getEventPublicationState = (
  event: { publishedAt?: string | null },
  now: Date = new Date(),
): 'draft' | 'published' | 'scheduled' =>
  !event.publishedAt
    ? 'draft'
    : new Date(event.publishedAt) > now
      ? 'scheduled'
      : 'published'

// like the server's `has_ended`, an event without an end ends at its start, following RFC 5545
export const getEventState = (
  event: { end?: string | null; start: string },
  now: Date,
): 'ended' | 'ongoing' | 'upcoming' =>
  now < new Date(event.start)
    ? 'upcoming'
    : now >= new Date(event.end ?? event.start)
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
    eventUploadsByEventId {
      nodes {
        id
        isHeaderImage
        rowId
        uploadByUploadId {
          id
          rowId
          storageKey
        }
      }
    }
    guestCountMaximum
    id
    isArchived
    isInPerson
    isRemote
    name
    publishedAt
    rowId
    slug
    start
    url
    visibility
  }
`)

export const getEventHeaderImageStorageKey = (event: {
  eventUploadsByEventId?: {
    nodes: readonly {
      isHeaderImage?: boolean | null
      uploadByUploadId?: { storageKey?: string | null } | null
    }[]
  } | null
}) =>
  event.eventUploadsByEventId?.nodes.find((node) => node.isHeaderImage)
    ?.uploadByUploadId?.storageKey
