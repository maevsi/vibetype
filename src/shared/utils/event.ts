import { graphql } from '~~/gql/generated'

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
