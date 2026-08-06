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
    eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
      nodes {
        eventCategoryByCategoryId {
          name
        }
      }
    }
    eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
      nodes {
        eventFormatByFormatId {
          name
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
