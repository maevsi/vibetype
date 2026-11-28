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
    visibility: EventVisibility.Public,
  }
}

/** An event an ingest route read, which the person either creates as its organizer or sends to the team. */
export type EventSubmission = Parameters<
  typeof getEventImportedFromIngest
>[0] & {
  base64Image?: string
  name: string
  sourceUrl?: string
}

/** Builds the prefill from what an ingest route read, which the model answers without a time zone, so the browser takes it as local time. */
export const getEventImportedFromIngest = (output: {
  description?: string | null
  end?: string | null
  location?: string | null
  name?: string | null
  start?: string | null
  url?: string | null
}) => {
  const getIsoString = (value?: string | null) => {
    const date = value ? new Date(value) : undefined

    return date && !Number.isNaN(date.getTime())
      ? date.toISOString()
      : undefined
  }

  return getEventImported({
    description: output.description,
    end: getIsoString(output.end),
    isInPerson: !!output.location,
    locationName: output.location,
    name: output.name ?? '',
    start: getIsoString(output.start),
    url: output.url,
  })
}
