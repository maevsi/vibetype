import { sanitize } from 'isomorphic-dompurify'
import ical, {
  ICalCalendarMethod,
  ICalEventClass,
  ICalEventStatus,
} from 'ical-generator'

import { type AddressFields, getAddressText } from '../../shared/utils/address'
import { getTextFromHtml } from '../../shared/utils/text' // TODO: replace this with an e2e test (https://playwright.dev/docs/clock)
import { EventVisibility } from '../../gql/generated/graphcache'
import type {
  EventItemFragment,
  GuestItemFragment,
} from '../../gql/generated/graphql'
import { type AppLocale, getLocalePrefix } from './i18n'

const visibilityToClass = {
  [EventVisibility.Public]: ICalEventClass.PUBLIC,
  [EventVisibility.Unlisted]: ICalEventClass.CONFIDENTIAL,
  [EventVisibility.Private]: ICalEventClass.PRIVATE,
}

export const getIcalString = ({
  event,
  guest,
  language,
  siteUrl,
}: {
  event: Pick<
    EventItemFragment,
    'description' | 'end' | 'name' | 'rowId' | 'slug' | 'start' | 'visibility'
  > & {
    isInPerson?: boolean | null
    addressByAddressId?:
      | (AddressFields & {
          location?: { latitude: number; longitude: number } | null
          name?: string | null
        })
      | null
    accountByCreatedBy: Omit<
      NonNullable<EventItemFragment['accountByCreatedBy']>,
      'id' | 'rowId'
    >
  }
  guest?: Pick<GuestItemFragment, 'rowId'>
  language?: AppLocale
  siteUrl: string
}) => {
  const eventAuthorUsername = event.accountByCreatedBy?.username
  const userEventPath = `${eventAuthorUsername}/${event.slug}`
  const localePrefix = language ? getLocalePrefix(language) : ''
  const eventUrl = guest
    ? `${siteUrl}${localePrefix}/guest/view/${guest.rowId}`
    : `${siteUrl}${localePrefix}/event/view/${userEventPath}`
  const eventDescriptionHtml = sanitize(
    event.description ? `${eventUrl}\n${event.description}` : '',
  )
  const hostname = new URL(siteUrl).hostname
  const address = event.isInPerson ? event.addressByAddressId : undefined
  const addressText = getAddressText(address)
  const icalLocation = address?.name
    ? {
        title: address.name,
        ...(addressText && { address: addressText }),
        ...(address.location && {
          geo: {
            lat: address.location.latitude,
            lon: address.location.longitude,
          },
        }),
      }
    : undefined

  return ical({
    // `prodId` is generated automatically.
    // name: userEventPath.replace('/', '_'),
    // url: eventUrl,
    // `scale` is specified as `GREGORIAN` if not set explicitly.
    // `timezone` shouldn't be needed as the database outputs UTC dates.
    method: ICalCalendarMethod.PUBLISH, // https://tools.ietf.org/html/rfc5546#section-3.2
    // `ttl` ... I don't think that's needed?
    events: [
      {
        class: visibilityToClass[event.visibility] || ICalEventClass.PRIVATE,
        id: event.rowId,
        // sequence: ,
        start: event.start, // Appointment date of beginning, required.
        ...(event.end && { end: event.end }),
        // `timezone` shouldn't be needed as the database outputs UTC dates.
        // timestamp: new Date(), // Appointment date of creation (= now).
        // allDay: false,
        // floating: , // Mutually exclusive with `timezone`.
        // repeating: {
        //   freq: 'MONTHLY', // required
        //   count: 5,
        //   interval: 2,
        //   until: new Date('Jan 01 2014 00:00:00 UTC'),
        //   byDay: ['su', 'mo'], // repeat only sunday and monday
        //   byMonth: [1, 2], // repeat only in january und february,
        //   byMonthDay: [1, 15], // repeat only on the 1st and 15th
        //   bySetPos: 3, // repeat every 3rd sunday (will take the first element of the byDay array)
        //   exclude: [new Date('Dec 25 2013 00:00:00 UTC')], // exclude these dates
        //   excludeTimezone: 'Europe/Berlin' // timezone of exclude
        // },
        // recurrenceId: new Date(),
        summary: event.name, // The event's title.
        ...(event.description && {
          description: {
            plain: getTextFromHtml(eventDescriptionHtml),
            html: eventDescriptionHtml,
          },
          // description: getTextFromHtml(DOMPurify.sanitize(eventDescriptionHtml)),
        }),
        ...(icalLocation && { location: icalLocation }),
        organizer: {
          name: eventAuthorUsername,
          email: eventAuthorUsername + '@' + hostname,
          // mailto: 'explicit@mailto.com'
        },
        // attendees: [{
        //   name: 'Me',
        //   email: 'm@e.ee',
        //   rsvp: true,
        //   role: 'req-participant',
        //   status: 'accepted',
        //   type: 'individual',
        //   delegatesTo: { email: 'to@bar.com', name: 'From' },
        //   delegatesFrom: { email: 'from@bar.com', name: 'Too' }
        // }],
        // alarms: [{
        //   type: 'display',
        //   triggerBefore: new Date(),
        //   triggerAfter: new Date(),
        //   repeat: 4,
        //   interval: 300,
        //   attach: 'https://example.com/notification.aud',
        //   description: 'Alarm!'
        // }],
        // categories: [{
        //   name: 'appointment'
        // }],
        url: eventUrl,
        status: ICalEventStatus.CONFIRMED,
        // status: 'CONFIRMED',
        // busystatus: 'busy',
        // created: new Date(), // Event creation date.
        // lastModified: new Date()
      },
    ],
  }).toString()
}
