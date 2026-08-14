import type Redis from 'ioredis'

import { EventVisibility } from '~~/gql/generated/graphcache'

const EVENT_DESCRIPTION_TRIM_LENGTH = 250

export const CHANNEL_NAME_ACCOUNT_PASSWORD_RESET =
  'account.password_reset_requested'
export const CHANNEL_NAME_ACCOUNT_REGISTRATION = 'account.registered'
export const CHANNEL_NAME_EVENT_INVITATION = 'guest.invited'

type Template = {
  language: AppLocale
  namespace: string
  time_zone?: string | null
  variables: Record<string, unknown>
}

type AccountPasswordResetRequestEvent = {
  channel: 'account.password_reset_requested'
  payload: {
    account_id: string
    template: Template
  }
}

type AccountRegistrationEvent = {
  channel: 'account.registered'
  payload: {
    account_id: string
    template: Template
  }
}

type EventInvitationEvent = {
  channel: 'guest.invited'
  payload: {
    guest_id: string
    template: Template
  }
}

type ChannelEvent =
  | AccountPasswordResetRequestEvent
  | AccountRegistrationEvent
  | EventInvitationEvent

const locales = {
  [CHANNEL_NAME_ACCOUNT_PASSWORD_RESET]: {
    de: {
      subject: 'Passwort zurücksetzen',
    },
    en: {
      subject: 'Reset password',
    },
  },
  [CHANNEL_NAME_ACCOUNT_REGISTRATION]: {
    de: {
      subject: 'Registrierung abschließen',
    },
    en: {
      subject: 'Complete registration',
    },
  },
  [CHANNEL_NAME_EVENT_INVITATION]: {
    de: {
      eventAttendanceTypeInPerson: 'vor Ort',
      eventAttendanceTypeRemote: 'digital',
      eventIsArchived: 'archiviert',
      eventVisibilityIsPrivate: 'private',
      eventVisibilityIsPublic: 'öffentliche',
      eventVisibilityIsUnlisted: 'ungelistete',
      subject: (eventName: string) => `Einladung: ${eventName}`,
    },
    en: {
      eventAttendanceTypeInPerson: 'in person',
      eventAttendanceTypeRemote: 'remote',
      eventIsArchived: 'archived',
      eventVisibilityIsPrivate: 'a private',
      eventVisibilityIsPublic: 'a public',
      eventVisibilityIsUnlisted: 'an unlisted',
      subject: (eventName: string) => `Invitation: ${eventName}`,
    },
  },
} as const

// Account data is fetched on demand by id rather than carried in the outbox payload, so personal
// data such as the email address never reaches the CDC log.
type AccountPayload = {
  email_address: string
  email_address_verification: string | null
  email_address_verification_valid_until: Date | null
  password_reset_verification: string | null
  password_reset_verification_valid_until: Date | null
  username: string
}

const fetchAccountPayload = async (
  accountId: string,
): Promise<AccountPayload | undefined> => {
  const rows = await executeQuery<AccountPayload[]>(
    sql`SELECT * FROM vibetype.outbox_payload_account(${accountId})`,
  )
  return rows[0]
}

// Guest invitation data is fetched on demand by id rather than carried in the outbox payload, so
// personal data such as the contact's email address never reaches the CDC log.
type GuestInvitationEvent = {
  id: string
  addressId: string | null
  description: string | null
  end: string | null
  guestCountMaximum: number | null
  isArchived: boolean
  isInPerson: boolean | null
  isRemote: boolean | null
  name: string
  slug: string
  start: string
  url: string | null
  visibility: EventVisibility
  createdAt: string
  createdBy: string
}

type GuestInvitationPayload = {
  contact_email_address: string | null
  contact_time_zone: string | null
  event: GuestInvitationEvent
  event_creator_profile_picture_upload_storage_key: string | null
  event_creator_username: string
}

const fetchGuestInvitationPayload = async (
  guestId: string,
): Promise<GuestInvitationPayload | undefined> => {
  const rows = await executeQuery<GuestInvitationPayload[]>(
    sql`SELECT * FROM vibetype.outbox_payload_guest_invitation(${guestId})`,
  )
  return rows[0]
}

export const processMessage = async ({
  channelEvent,
  id,
  redis,
  runtimeConfig,
  siteUrl,
  tusdFilesUrl,
}: {
  channelEvent: ChannelEvent
  id: string
  redis: Redis
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
  siteUrl: string
  tusdFilesUrl: string
}) => {
  if (await getIsAcknowledged({ id })) return

  // TODO(major): remove `limit24h` fallback in the next major version
  const limit24hLegacy =
    runtimeConfig.public[SITE_NAME].email.limit24h !== ''
      ? +runtimeConfig.public[SITE_NAME].email.limit24h
      : undefined

  const rateLimitPerDayConfigured =
    runtimeConfig.public[SITE_NAME].email.rateLimit.perDay !== ''
      ? +runtimeConfig.public[SITE_NAME].email.rateLimit.perDay
      : undefined

  const rateLimitPerDayParsed =
    rateLimitPerDayConfigured !== undefined && !isNaN(rateLimitPerDayConfigured)
      ? rateLimitPerDayConfigured
      : limit24hLegacy

  const rateLimitPerDay =
    rateLimitPerDayParsed !== undefined && !isNaN(rateLimitPerDayParsed)
      ? rateLimitPerDayParsed
      : MAEVSI_EMAIL_RATE_LIMIT_PER_DAY

  const rateLimitPerSecondParsed =
    +runtimeConfig.public[SITE_NAME].email.rateLimit.perSecond
  const rateLimitPerSecond =
    !isNaN(rateLimitPerSecondParsed) && rateLimitPerSecondParsed > 0
      ? rateLimitPerSecondParsed
      : MAEVSI_EMAIL_RATE_LIMIT_PER_SECOND

  if (rateLimitPerDayParsed === undefined || isNaN(rateLimitPerDayParsed)) {
    console.warn(
      `daily email limit is not a number, using default: ${MAEVSI_EMAIL_RATE_LIMIT_PER_DAY}`,
    )
  }

  const { channel, payload } = channelEvent
  const locale = payload.template.language

  switch (channel) {
    case CHANNEL_NAME_ACCOUNT_PASSWORD_RESET: {
      const account = await fetchAccountPayload(payload.account_id)
      if (
        !account?.password_reset_verification ||
        !account.password_reset_verification_valid_until
      ) {
        console.error(
          `No pending password reset found for account ${payload.account_id}`,
        )
        break
      }

      await sendEmail({
        mailOptions: {
          subject: locales[channel][locale].subject,
          to: account.email_address,
        },
        name: channel,
        props: {
          emailAddress: account.email_address,
          locale,
          passwordResetVerificationLink: `${siteUrl}${
            locale !== LOCALE_DEFAULT ? '/' + locale : ''
          }/account/password/reset?code=${account.password_reset_verification}`,
          timeZone: payload.template.time_zone ?? undefined,
          validUntil:
            account.password_reset_verification_valid_until.toISOString(),
        },
        rateLimitPerDay,
        rateLimitPerSecond,
        redis,
      })
      break
    }
    case CHANNEL_NAME_ACCOUNT_REGISTRATION: {
      const account = await fetchAccountPayload(payload.account_id)
      if (
        !account?.email_address_verification ||
        !account.email_address_verification_valid_until
      ) {
        console.error(
          `No pending email address verification found for account ${payload.account_id}`,
        )
        break
      }

      await sendEmail({
        mailOptions: {
          subject: locales[channel][locale].subject,
          to: account.email_address,
        },
        name: channel,
        props: {
          emailAddress: account.email_address,
          emailAddressVerificationLink: `${siteUrl}${
            locale !== LOCALE_DEFAULT ? '/' + locale : ''
          }/account/verify?code=${account.email_address_verification}`,
          locale,
          timeZone: payload.template.time_zone ?? undefined,
          username: account.username,
          validUntil:
            account.email_address_verification_valid_until.toISOString(),
        },
        rateLimitPerDay,
        rateLimitPerSecond,
        redis,
      })
      break
    }
    case CHANNEL_NAME_EVENT_INVITATION: {
      const guestInvitation = await fetchGuestInvitationPayload(
        payload.guest_id,
      )
      if (!guestInvitation) {
        console.error(
          `Could not find guest invitation data for guest ${payload.guest_id}`,
        )
        break
      }

      await sendEventInvitationMail({
        guestId: payload.guest_id,
        guestInvitation,
        locale,
        rateLimitPerDay,
        rateLimitPerSecond,
        redis,
        siteUrl,
        tusdFilesUrl,
      })
      break
    }
    default:
      throw new Error(`Unexpected channel: ${channel}`)
  }

  await ack({
    id,
  })
}

const ack = async ({ id }: { id: string }) => {
  const baseURL = getServiceHrefPostgraphile()
  const response = await fetch(`${baseURL}/graphql`, {
    body: JSON.stringify({
      query: `mutation ($id: UUID!) { outboxAcknowledge(input: { id: $id, isAcknowledged: true }) { clientMutationId } }`,
      variables: { id },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  // best-effort: the email was already sent above, so a failed ack must not
  // throw here, that would trigger a retry and resend it. The Redis dedupe
  // key is the actual guard against reprocessing; a lost ack only matters if
  // that key expires (24h) before the notification row is touched again.
  if (!response.ok)
    console.error(`Could not ack due to error: "${response.statusText}"`)
}

// Queried instead of read from the Kafka message, since the outbox event router SMT only forwards the payload column, not is_acknowledged.
const getIsAcknowledged = async ({ id }: { id: string }): Promise<boolean> => {
  const baseURL = getServiceHrefPostgraphile()
  const response = await fetch(`${baseURL}/graphql`, {
    body: JSON.stringify({
      query: `query ($id: UUID!) { outboxIsAcknowledged(id: $id) }`,
      variables: { id },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!response.ok) {
    console.error(
      `Could not check acknowledgement due to error: "${response.statusText}"`,
    )
    return false
  }

  const { data } = (await response.json()) as {
    data?: { outboxIsAcknowledged: boolean | null }
  }

  return !!data?.outboxIsAcknowledged
}

export const sendEventInvitationMail = async ({
  guestId,
  guestInvitation,
  locale,
  rateLimitPerDay,
  rateLimitPerSecond,
  redis,
  siteUrl,
  tusdFilesUrl,
}: {
  guestId: string
  guestInvitation: GuestInvitationPayload
  locale: AppLocale
  rateLimitPerDay: number
  rateLimitPerSecond: number
  redis: Redis
  siteUrl: string
  tusdFilesUrl: string
}) => {
  const {
    contact_email_address: emailAddress,
    contact_time_zone: timeZone,
    event,
    event_creator_profile_picture_upload_storage_key:
      eventCreatorProfilePictureUploadStorageKey,
    event_creator_username: eventCreatorUsername,
  } = guestInvitation

  if (!emailAddress) {
    console.error(`Could not get email address for guest ${guestId}!`)
    return
  }

  const icalFetch = await fetch(
    `http://${SITE_NAME}:3000/api/model/event/ical`,
    {
      // `contact` is intentionally omitted here: this notification's payload only carries
      // `emailAddress`/`timeZone`, not the guest's linked `Contact` record (`firstName`/`lastName`),
      // so `{{contact.firstName}}`-style merge fields in the event description render blank in the
      // emailed `.ics` attachment, unlike the guest-view page's manual download.
      body: JSON.stringify({
        event: {
          ...event,
          accountByCreatedBy: {
            username: eventCreatorUsername,
          },
          rowId: event.id,
          visibility: event.visibility,
        },
        guest: {
          rowId: guestId,
        },
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  )

  if (!icalFetch.ok) {
    console.error(`Could not get ical data!`, event)
  }

  const icalText = icalFetch.ok ? await icalFetch.text() : undefined

  const t = locales[CHANNEL_NAME_EVENT_INVITATION][locale]

  const eventAttendanceType = [
    ...(event.isInPerson ? [t.eventAttendanceTypeInPerson] : []),
    ...(event.isRemote ? [t.eventAttendanceTypeRemote] : []),
  ].join(', ')

  let eventDescription

  if (event.description !== null) {
    eventDescription = HTML_TO_TEXT(
      event.description,
      // handlebars.compile(event.description)({
      //   contact: { emailAddress },
      //   event,
      //   invitation: {
      //     id: guestId,
      //   },
      // }),
    )

    if (event.description.length > EVENT_DESCRIPTION_TRIM_LENGTH) {
      eventDescription =
        eventDescription.substring(0, EVENT_DESCRIPTION_TRIM_LENGTH) + '…'
    }
  }

  let eventVisibility

  if (event.isArchived) {
    eventVisibility = t.eventIsArchived
  } else if (event.visibility === EventVisibility.Public) {
    eventVisibility = t.eventVisibilityIsPublic
  } else if (event.visibility === EventVisibility.Private) {
    eventVisibility = t.eventVisibilityIsPrivate
  } else if (event.visibility === EventVisibility.Unlisted) {
    eventVisibility = t.eventVisibilityIsUnlisted
  } else {
    throw new Error(
      `Event is neither archived nor has it a visibility of public, unlisted or private: ${event}`,
    )
  }

  await sendEmail({
    rateLimitPerDay,
    mailOptions: {
      fromName: eventCreatorUsername,
      ...(icalText
        ? {
            icalEvent: {
              content: icalText,
              filename: eventCreatorUsername + '_' + event.slug + '.ics',
              method: 'publish',
            },
          }
        : {}),
      subject: t.subject(event.name),
      to: emailAddress,
    },
    name: CHANNEL_NAME_EVENT_INVITATION,
    props: {
      emailAddress,
      eventAttendanceType,
      eventAuthorProfileHref: `${siteUrl}/accounts/${eventCreatorUsername}`,
      eventAuthorProfilePictureSrc: eventCreatorProfilePictureUploadStorageKey
        ? tusdFilesUrl + eventCreatorProfilePictureUploadStorageKey
        : 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIHdpZHRoPSI0MDFweCIgaGVpZ2h0PSI0MDFweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAzMTIuODA5IDAgNDAxIDQwMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIzMTIuODA5IDAgNDAxIDQwMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yMjMgMCAwIDEuMjIzIC00NjcuNSAtODQzLjQ0KSI+Cgk8cmVjdCB4PSI2MDEuNDUiIHk9IjY1My4wNyIgd2lkdGg9IjQwMSIgaGVpZ2h0PSI0MDEiIGZpbGw9IiNFNEU2RTciLz4KCTxwYXRoIGQ9Im04MDIuMzggOTA4LjA4Yy04NC41MTUgMC0xNTMuNTIgNDguMTg1LTE1Ny4zOCAxMDguNjJoMzE0Ljc5Yy0zLjg3LTYwLjQ0LTcyLjktMTA4LjYyLTE1Ny40MS0xMDguNjJ6IiBmaWxsPSIjQUVCNEI3Ii8+Cgk8cGF0aCBkPSJtODgxLjM3IDgxOC44NmMwIDQ2Ljc0Ni0zNS4xMDYgODQuNjQxLTc4LjQxIDg0LjY0MXMtNzguNDEtMzcuODk1LTc4LjQxLTg0LjY0MSAzNS4xMDYtODQuNjQxIDc4LjQxLTg0LjY0MWM0My4zMSAwIDc4LjQxIDM3LjkgNzguNDEgODQuNjR6IiBmaWxsPSIjQUVCNEI3Ii8+CjwvZz4KPC9zdmc+Cg==',
      eventAuthorUsername: eventCreatorUsername,
      eventDescription,
      eventEnd: event.end || undefined,
      // TODO: add event group (https://github.com/maevsi/vibetype/issues/92)
      eventLink: `${siteUrl}${
        locale !== LOCALE_DEFAULT ? '/' + locale : ''
      }/guest/view/${guestId}`,
      eventName: event.name,
      eventStart: event.start,
      eventVisibility,
      locale,
      timeZone: timeZone ?? undefined,
    },
    rateLimitPerSecond,
    redis,
  })
}
