import type Redis from 'ioredis'
import { z } from 'zod'

import { EventVisibility } from '~~/gql/generated/graphcache'

const EVENT_DESCRIPTION_TRIM_LENGTH = 250

export const CHANNEL_NAME_ACCOUNT_PASSWORD_RESET =
  'account.password_reset_requested'
export const CHANNEL_NAME_ACCOUNT_REGISTRATION = 'account.registered'
export const CHANNEL_NAME_EVENT_INVITATION = 'guest.invited'

export const outboxEnvelopeSchema = z.object({
  aggregate_id: z.uuid(),
  aggregate_type: z.string(),
  data: z.record(z.string(), z.unknown()),
  id: z.uuid(),
  occurred_at: z.string(),
  type: z.string(),
  version: z.number().int(),
})
type OutboxEnvelope = z.infer<typeof outboxEnvelopeSchema>

const accountDataSchema = z.object({
  account_id: z.uuid(),
  language: LocaleSchema,
})
const guestInvitedDataSchema = z.object({
  guest_id: z.uuid(),
  language: LocaleSchema,
})
const uploadDeletedDataSchema = z.object({
  storage_key: z.string().nullish(),
})

type AccountResolved = {
  email_address: string
  email_address_verification: string | null
  email_address_verification_valid_until: Date | null
  password_reset_verification: string | null
  password_reset_verification_valid_until: Date | null
  username: string
}

type GuestInvitationResolved = {
  contact_email_address: string
  contact_time_zone: string | null
  // jsonb, so timestamps arrive as ISO 8601 strings
  event: {
    created_by: string
    description: string | null
    end: string | null
    guest_count_maximum: number | null
    id: string
    is_archived: boolean
    is_in_person: boolean | null
    is_remote: boolean | null
    name: string
    slug: string
    start: string
    visibility: EventVisibility
  }
  event_creator_profile_picture_upload_storage_key: string | null
  event_creator_username: string
}

type OutboxContext = {
  redis: Redis
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
  siteUrl: string
  tusdFilesUrl: string
}

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

const getEmailRateLimits = (
  runtimeConfig: ReturnType<typeof useRuntimeConfig>,
) => {
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

  return { rateLimitPerDay, rateLimitPerSecond }
}

const getLocalePrefix = (locale: AppLocale) =>
  locale !== LOCALE_DEFAULT ? '/' + locale : ''

const parseData = <T extends z.ZodType>(
  schema: T,
  envelope: OutboxEnvelope,
): z.infer<T> => {
  const result = schema.safeParse(envelope.data)

  if (!result.success)
    throw new PermanentProcessingError(
      `Invalid data for outbox event ${envelope.id} of type ${envelope.type}: ${result.error.message}`,
    )

  return result.data
}

const resolveAccount = async (accountId: string) => {
  const [account] = await executeQuery(
    sql<AccountResolved[]>`
      SELECT * FROM vibetype_private.outbox_account_resolve(${accountId})
    `,
  )
  return account
}

const resolveGuestInvitation = async (guestId: string) => {
  const [guestInvitation] = await executeQuery(
    sql<GuestInvitationResolved[]>`
      SELECT * FROM vibetype_private.outbox_guest_invitation_resolve(${guestId})
    `,
  )
  return guestInvitation
}

const sendAccountRegistrationMail = async (
  envelope: OutboxEnvelope,
  { redis, runtimeConfig, siteUrl }: OutboxContext,
) => {
  const { account_id: accountId, language: locale } = parseData(
    accountDataSchema,
    envelope,
  )
  const account = await resolveAccount(accountId)

  if (
    !account?.email_address_verification ||
    !account.email_address_verification_valid_until
  ) {
    console.info(
      `Skipping registration email for outbox event ${envelope.id}: account or verification is gone`,
    )
    return
  }

  await sendEmail({
    mailOptions: {
      subject: locales[CHANNEL_NAME_ACCOUNT_REGISTRATION][locale].subject,
      to: account.email_address,
    },
    name: CHANNEL_NAME_ACCOUNT_REGISTRATION,
    props: {
      emailAddress: account.email_address,
      emailAddressVerificationLink: `${siteUrl}${getLocalePrefix(locale)}/account/verify?code=${account.email_address_verification}`,
      locale,
      username: account.username,
      validUntil: account.email_address_verification_valid_until.toISOString(),
    },
    ...getEmailRateLimits(runtimeConfig),
    redis,
  })
}

const sendAccountPasswordResetMail = async (
  envelope: OutboxEnvelope,
  { redis, runtimeConfig, siteUrl }: OutboxContext,
) => {
  const { account_id: accountId, language: locale } = parseData(
    accountDataSchema,
    envelope,
  )
  const account = await resolveAccount(accountId)

  if (
    !account?.password_reset_verification ||
    !account.password_reset_verification_valid_until
  ) {
    console.info(
      `Skipping password reset email for outbox event ${envelope.id}: account or verification is gone`,
    )
    return
  }

  await sendEmail({
    mailOptions: {
      subject: locales[CHANNEL_NAME_ACCOUNT_PASSWORD_RESET][locale].subject,
      to: account.email_address,
    },
    name: CHANNEL_NAME_ACCOUNT_PASSWORD_RESET,
    props: {
      emailAddress: account.email_address,
      locale,
      passwordResetVerificationLink: `${siteUrl}${getLocalePrefix(locale)}/account/password/reset?code=${account.password_reset_verification}`,
      validUntil: account.password_reset_verification_valid_until.toISOString(),
    },
    ...getEmailRateLimits(runtimeConfig),
    redis,
  })
}

const sendGuestInvitationMail = async (
  envelope: OutboxEnvelope,
  context: OutboxContext,
) => {
  const { guest_id: guestId, language: locale } = parseData(
    guestInvitedDataSchema,
    envelope,
  )
  const guestInvitation = await resolveGuestInvitation(guestId)

  if (!guestInvitation) {
    console.info(
      `Skipping invitation email for outbox event ${envelope.id}: guest, contact or email address is gone`,
    )
    return
  }

  await sendEventInvitationMail({
    ...context,
    ...getEmailRateLimits(context.runtimeConfig),
    guestId,
    guestInvitation,
    locale,
  })
}

const outboxHandlers: Record<
  string,
  {
    handle?: (envelope: OutboxEnvelope, context: OutboxContext) => Promise<void>
    version: number
  }
> = {
  // only the lakehouse acts on deletions
  'account.deleted': { version: 1 },
  [CHANNEL_NAME_ACCOUNT_PASSWORD_RESET]: {
    handle: sendAccountPasswordResetMail,
    version: 1,
  },
  [CHANNEL_NAME_ACCOUNT_REGISTRATION]: {
    handle: sendAccountRegistrationMail,
    version: 1,
  },
  'account.registration_refreshed': {
    handle: sendAccountRegistrationMail,
    version: 1,
  },
  [CHANNEL_NAME_EVENT_INVITATION]: {
    handle: sendGuestInvitationMail,
    version: 1,
  },
  'upload.deleted': {
    handle: async (envelope) => {
      const { storage_key: storageKey } = parseData(
        uploadDeletedDataSchema,
        envelope,
      )
      await processUpload({ id: envelope.aggregate_id, storageKey })
    },
    version: 1,
  },
}

export const processOutboxMessage = async ({
  payload,
  ...context
}: OutboxContext & { payload: unknown }) => {
  const envelopeResult = outboxEnvelopeSchema.safeParse(payload)

  if (!envelopeResult.success)
    throw new PermanentProcessingError(
      `Invalid outbox envelope: ${envelopeResult.error.message}`,
    )

  const envelope = envelopeResult.data
  const handler = outboxHandlers[envelope.type]

  if (!handler || handler.version !== envelope.version) {
    console.warn(
      `Skipping outbox event ${envelope.id} with unsupported type ${envelope.type} or version ${envelope.version}`,
    )
    return
  }

  if (!handler.handle) return

  if (await getIsProcessed(envelope.id)) return

  await handler.handle(envelope, context)
  await markProcessed(envelope.id)
}

// A failed check must not default to "not processed": on a consumer replay that would resend every email.
const getIsProcessed = async (id: string) => {
  const [row] = await executeQuery(
    sql<{ is_processed: boolean | null }[]>`
      SELECT vibetype.outbox_is_processed(${id}) AS is_processed
    `,
  )

  if (typeof row?.is_processed !== 'boolean')
    throw new Error(`Could not check processed state of outbox event ${id}`)

  return row.is_processed
}

// Not atomic with the side effect: if this fails after an email went out, the retry sends it again.
const markProcessed = async (id: string) => {
  await executeQuery(sql`SELECT vibetype.outbox_mark_processed(${id})`)
}

export const sendEventInvitationMail = async ({
  guestId,
  guestInvitation: {
    contact_email_address: emailAddress,
    contact_time_zone: timeZone,
    event_creator_profile_picture_upload_storage_key:
      eventCreatorProfilePictureUploadStorageKey,
    event,
    event_creator_username: eventCreatorUsername,
  },
  locale,
  rateLimitPerDay,
  rateLimitPerSecond,
  redis,
  siteUrl,
  tusdFilesUrl,
}: {
  guestId: string
  guestInvitation: GuestInvitationResolved
  locale: AppLocale
  rateLimitPerDay: number
  rateLimitPerSecond: number
  redis: Redis
  siteUrl: string
  tusdFilesUrl: string
}) => {
  const icalFetch = await fetch(
    `http://${SITE_NAME}:3000/api/model/event/ical`,
    {
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
    eventDescription = HTML_TO_TEXT(event.description)

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
