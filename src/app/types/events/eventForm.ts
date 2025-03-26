import type { EventVisibility } from '~~/gql/generated/graphql'

export type EventFormType = {
  address: string
  authorAccountId: string
  category: string
  city: string
  country: string
  coverImage: File | null
  description: string
  end: string
  endDate: string
  endTime: string
  format: string
  frequency: string | null
  id: string
  images: File[]
  inviteeCountMaximum: string
  isInPerson: boolean
  isRecurring: boolean
  isRemote: boolean
  location: string
  name: string
  postcode: string
  previewUrls: string[]
  recurringEndDate: string | null
  slug: string
  start: string
  startDate: string
  startTime: string
  street: string
  url: string
  visibility: EventVisibility | null
  website: string
}
