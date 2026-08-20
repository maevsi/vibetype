import { createDecipheriv } from 'node:crypto'

import type Redis from 'ioredis'

import { EventVisibility } from '~~/gql/generated/graphcache'

const EVENT_DESCRIPTION_TRIM_LENGTH = 250

export const CHANNEL_NAME_ACCOUNT_PASSWORD_RESET =
  'account.password_reset_requested'
export const CHANNEL_NAME_ACCOUNT_REGISTRATION = 'account.registered'
export const CHANNEL_NAME_EMAIL_ADDRESS_VERIFICATION =
  'email_address_verification.requested'
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
    encrypted: string
    password_reset_verification_valid_until: string
    subject_id: string
    template: Template
  }
}

type AccountRegistrationEvent = {
  channel: 'account.registered'
  payload: {
    account_id: string
    encrypted: string
    subject_id: string
    template: Template
  }
}

type EmailAddressVerificationEvent = {
  channel: 'email_address_verification.requested'
  payload: {
    email_address_id: string
    encrypted: string
    subject_id: string
    template: Template
    valid_until: string
  }
}

type EventInvitationEvent = {
  channel: 'guest.invited'
  payload: {
    contact_time_zone: string | null
    encrypted: string
    event: GuestInvitationEvent
    guest_id: string
    subject_id: string
    template: Template
  }
}

type ChannelEvent =
  | AccountPasswordResetRequestEvent
  | AccountRegistrationEvent
  | EmailAddressVerificationEvent
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
  [CHANNEL_NAME_EMAIL_ADDRESS_VERIFICATION]: {
    de: {
      subject: 'E-Mail-Adresse bestätigen',
    },
    en: {
      subject: 'Confirm your email address',
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

// Outbox payload content is encrypted under the subject's key rather than carried in plaintext, so PII never reaches the CDC log even transiently (crypto-shredding).
// Each payload carries the id of the subject whose key it was encrypted under (`subject_id`), pinned by the sqitch writer at outbox-insert time rather than re-derived here at consumption time.
// This keeps decryption correct even if, for example, the account's primary email address changes between outbox-write and Kafka delivery.
//
// TODO: verify this against a real outbox_encrypt-produced value once deployed. pgcrypto's
// encrypt_iv('aes', ...) is assumed to be plain AES-256-CBC/PKCS7 given a 32-byte key, matching
// Node's aes-256-cbc, but this cross-language byte-layout compatibility has not been exercised
// end to end.
const decryptOutboxPayload = <T>(encryptedBase64: string, key: Buffer): T => {
  const bytes = Buffer.from(encryptedBase64, 'base64')
  const iv = bytes.subarray(0, 16)
  const ciphertext = bytes.subarray(16)

  const decipher = createDecipheriv('aes-256-cbc', key, iv)
  const decrypted = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final(),
  ])

  return JSON.parse(decrypted.toString('utf8')) as T
}

const fetchSubjectKey = async (
  subjectId: string,
): Promise<Buffer | undefined> => {
  const rows = await executeQuery<{ key: Buffer }[]>(
    sql`
      SELECT key
      FROM vibetype_private.subject
      WHERE id = ${subjectId}
    `,
  )
  return rows[0]?.key
}

type AccountRegisteredContent = {
  emailAddress: string
  username: string
}

type AccountPasswordResetContent = {
  emailAddress: string
  passwordResetVerification: string
}

type EmailAddressVerificationContent = {
  emailAddress: string
  code: string
}

// Plaintext, not part of the encrypted content: the event is its own entity, not PII of the
// invited contact, so keeping it out of encryption leaves it available for event-stream analytics.
type GuestInvitationEvent = {
  id: string
  address_id: string | null
  description: string | null
  end: string | null
  guest_count_maximum: number | null
  is_archived: boolean
  is_in_person: boolean | null
  is_remote: boolean | null
  name: string
  slug: string
  start: string
  url: string | null
  visibility: EventVisibility
  created_at: string
  created_by: string
}

type GuestInvitationContent = {
  contactEmailAddress: string
  eventCreatorProfilePictureUploadStorageKey: string | null
  eventCreatorUsername: string
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
  if (await getIsProcessed({ id })) return

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
      const key = await fetchSubjectKey(payload.subject_id)
      if (!key) {
        console.error(
          `Could not resolve subject key for subject ${payload.subject_id}`,
        )
        break
      }

      const content = decryptOutboxPayload<AccountPasswordResetContent>(
        payload.encrypted,
        key,
      )

      await sendEmail({
        mailOptions: {
          subject: locales[channel][locale].subject,
          to: content.emailAddress,
        },
        name: channel,
        props: {
          emailAddress: content.emailAddress,
          locale,
          passwordResetVerificationLink: `${siteUrl}${
            locale !== LOCALE_DEFAULT ? '/' + locale : ''
          }/account/password/reset?code=${content.passwordResetVerification}`,
          timeZone: payload.template.time_zone ?? undefined,
          validUntil: payload.password_reset_verification_valid_until,
        },
        rateLimitPerDay,
        rateLimitPerSecond,
        redis,
      })
      break
    }
    case CHANNEL_NAME_ACCOUNT_REGISTRATION: {
      const key = await fetchSubjectKey(payload.subject_id)
      if (!key) {
        console.error(
          `Could not resolve subject key for subject ${payload.subject_id}`,
        )
        break
      }

      const content = decryptOutboxPayload<AccountRegisteredContent>(
        payload.encrypted,
        key,
      )

      await sendEmail({
        mailOptions: {
          subject: locales[channel][locale].subject,
          to: content.emailAddress,
        },
        name: channel,
        props: {
          emailAddress: content.emailAddress,
          locale,
          siteUrl,
          username: content.username,
        },
        rateLimitPerDay,
        rateLimitPerSecond,
        redis,
      })
      break
    }
    case CHANNEL_NAME_EMAIL_ADDRESS_VERIFICATION: {
      const key = await fetchSubjectKey(payload.subject_id)
      if (!key) {
        console.error(
          `Could not resolve subject key for subject ${payload.subject_id}`,
        )
        break
      }

      const content = decryptOutboxPayload<EmailAddressVerificationContent>(
        payload.encrypted,
        key,
      )

      await sendEmail({
        mailOptions: {
          subject: locales[channel][locale].subject,
          to: content.emailAddress,
        },
        name: channel,
        props: {
          emailAddress: content.emailAddress,
          emailAddressVerificationLink: `${siteUrl}${
            locale !== LOCALE_DEFAULT ? '/' + locale : ''
          }/account/registration/confirm?code=${content.code}`,
          locale,
          timeZone: payload.template.time_zone ?? undefined,
          validUntil: payload.valid_until,
        },
        rateLimitPerDay,
        rateLimitPerSecond,
        redis,
      })
      break
    }
    case CHANNEL_NAME_EVENT_INVITATION: {
      const key = await fetchSubjectKey(payload.subject_id)
      if (!key) {
        console.error(
          `Could not resolve subject key for subject ${payload.subject_id}`,
        )
        break
      }

      const guestInvitation = decryptOutboxPayload<GuestInvitationContent>(
        payload.encrypted,
        key,
      )

      await sendEventInvitationMail({
        contactTimeZone: payload.contact_time_zone,
        event: payload.event,
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
      throw new Error(`Unexpected channel: ${JSON.stringify(channel)}`)
  }

  await markProcessed({
    id,
  })
}

// Marks the outbox event as processed in vibetype's own idempotency table, independent of any other outbox consumer (e.g. reccoom) tracking its own processing state on the same row.
// A failure here is not swallowed: the email was already sent above, so leaving this row unmarked risks a duplicate send on the next retry, and there is no way to make this atomic with the email send itself short of a two-phase commit pattern this codebase doesn't have.
// Propagating the error lets the consumer's retry/dead-letter-queue mechanism surface it instead of silently accepting that residual risk.
const markProcessed = async ({ id }: { id: string }) => {
  const baseURL = getServiceHrefPostgraphile()
  const response = await fetch(`${baseURL}/graphql`, {
    body: JSON.stringify({
      query: `mutation ($id: UUID!) { outboxMarkProcessed(input: { outboxId: $id }) { clientMutationId } }`,
      variables: { id },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!response.ok)
    throw new Error(
      `Could not mark outbox event as processed due to error: "${response.statusText}"`,
    )
}

// Queried instead of read from the Kafka message, since the outbox event router SMT only forwards the payload column, not any processed-state column.
// A failed or malformed check does not default to "not processed": that would risk mass-resending real emails on a Kafka consumer replay.
// Instead the error propagates so the message falls back to the consumer's retry/dead-letter-queue handling, the same as any other processing failure.
const getIsProcessed = async ({ id }: { id: string }): Promise<boolean> => {
  const baseURL = getServiceHrefPostgraphile()
  const response = await fetch(`${baseURL}/graphql`, {
    body: JSON.stringify({
      query: `query ($id: UUID!) { outboxIsProcessed(outboxId: $id) }`,
      variables: { id },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!response.ok)
    throw new Error(
      `Could not check processed state due to error: "${response.statusText}"`,
    )

  const { data } = (await response.json()) as {
    data?: { outboxIsProcessed: boolean | null }
  }

  if (data?.outboxIsProcessed == null)
    throw new Error('Could not check processed state: response had no data')

  return data.outboxIsProcessed
}

export const sendEventInvitationMail = async ({
  contactTimeZone: timeZone,
  event,
  guestId,
  guestInvitation,
  locale,
  rateLimitPerDay,
  rateLimitPerSecond,
  redis,
  siteUrl,
  tusdFilesUrl,
}: {
  contactTimeZone: string | null
  event: GuestInvitationEvent
  guestId: string
  guestInvitation: GuestInvitationContent
  locale: AppLocale
  rateLimitPerDay: number
  rateLimitPerSecond: number
  redis: Redis
  siteUrl: string
  tusdFilesUrl: string
}) => {
  const {
    contactEmailAddress: emailAddress,
    eventCreatorProfilePictureUploadStorageKey,
    eventCreatorUsername,
  } = guestInvitation

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
    ...(event.is_in_person ? [t.eventAttendanceTypeInPerson] : []),
    ...(event.is_remote ? [t.eventAttendanceTypeRemote] : []),
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

  if (event.is_archived) {
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
