import { EventVisibility } from '~~/gql/generated/graphcache'
import type FormEvent from '~/components/form/FormEvent.vue'

export type EventImported = InstanceType<typeof FormEvent>['$props']['event']

/** Builds the prefill the event form takes from fields found in a file or an image. */
export const getEventImported = async ({
  description,
  end,
  isInPerson,
  locationName,
  name,
  start,
  url,
}: {
  description?: string | null
  end?: string | null
  isInPerson: boolean
  locationName?: string | null
  name: string
  start?: string | null
  url?: string | null
}): Promise<EventImported> => {
  const slugify = (await import('slugify')).default

  // without a `rowId` the form still creates a new event
  return {
    addressByAddressId: { name: locationName },
    description: description ? getHtmlFromText(description) : null,
    end: end ?? null,
    guestCountMaximum: null,
    isInPerson,
    isRemote: false,
    name,
    rowId: '',
    slug: slugify(name, { lower: true, strict: true }), // the form derives it only while the name is typed
    start: start ?? '',
    url: url ?? null,
    visibility: EventVisibility.Private,
  }
}
