import type { ExtractComponentProps } from '@vue-email/render'
import type Redis from 'ioredis'
import { render } from '@vue-email/render'
import { z } from 'zod'

import EmailAccountPasswordResetRequest from '../assets/emails/EmailAccountPasswordResetRequest.vue'
import EmailAccountRegistration from '../assets/emails/EmailAccountRegistration.vue'
import EmailEventInvitation from '../assets/emails/EmailEventInvitation.vue'

import {
  CHANNEL_NAME_ACCOUNT_PASSWORD_RESET as EMAIL_NAME_ACCOUNT_PASSWORD_RESET,
  CHANNEL_NAME_ACCOUNT_REGISTRATION as EMAIL_NAME_ACCOUNT_REGISTRATION,
  CHANNEL_NAME_EVENT_INVITATION as EMAIL_NAME_EVENT_INVITATION,
} from '#server/utils/notification'

const MAIL_RATE_LIMIT_MAX_WAIT_MS = 10_000

const acquireMailRateSlot = async (
  rateLimitPerSecond: number,
  redis: Redis,
): Promise<void> => {
  const startTime = Date.now()

  while (Date.now() - startTime < MAIL_RATE_LIMIT_MAX_WAIT_MS) {
    try {
      const windowKey = `mail:rate:${Math.floor(Date.now() / 1000)}`

      // Atomically increment only when under the limit to avoid inflating the
      // counter on failed acquisitions, which would reduce throughput further.
      const count = await redis.eval(
        `local c = redis.call('get', KEYS[1])
if c and tonumber(c) >= tonumber(ARGV[1]) then return 0 end
local n = redis.call('incr', KEYS[1])
redis.call('expire', KEYS[1], 2)
return n`,
        1,
        windowKey,
        String(rateLimitPerSecond),
      )

      if (Number(count) > 0) return

      const waitMs = 1000 - (Date.now() % 1000)
      await new Promise<void>((resolve) => setTimeout(resolve, waitMs))
    } catch (error) {
      console.warn(`Redis rate limiting unavailable, proceeding: ${error}`)
      return
    }
  }

  throw new Error(
    `Mail rate limit slot could not be acquired within ${MAIL_RATE_LIMIT_MAX_WAIT_MS}ms`,
  )
}

const emailConfig = {
  [EMAIL_NAME_ACCOUNT_PASSWORD_RESET]: {
    component: EmailAccountPasswordResetRequest,
    props: {} as ExtractComponentProps<typeof EmailAccountPasswordResetRequest>,
  },
  [EMAIL_NAME_ACCOUNT_REGISTRATION]: {
    component: EmailAccountRegistration,
    props: {} as ExtractComponentProps<typeof EmailAccountRegistration>,
  },
  [EMAIL_NAME_EVENT_INVITATION]: {
    component: EmailEventInvitation,
    props: {} as ExtractComponentProps<typeof EmailEventInvitation>,
  },
} as const
type EmailConfig = typeof emailConfig
export type EmailProps<T extends keyof EmailConfig> = EmailConfig[T]['props']

export const EMAIL_NAMES = z.enum([
  EMAIL_NAME_ACCOUNT_PASSWORD_RESET,
  EMAIL_NAME_ACCOUNT_REGISTRATION,
  EMAIL_NAME_EVENT_INVITATION,
])
export type EmailName = z.infer<typeof EMAIL_NAMES>

export const getEmail = async <T extends EmailName>({
  name,
  props,
}: {
  name: T
  props: EmailProps<T>
}) =>
  await getHtmlAndText({
    name,
    props,
  })

export const sendEmail = async <T extends EmailName>({
  mailOptions,
  name,
  props,
  rateLimitPerDay,
  rateLimitPerSecond,
  redis,
}: {
  mailOptions: {
    fromName?: string
    icalEvent?: Record<string, unknown> // https://nodemailer.com/message/calendar-events/
    subject: string
    to: string
  }
  name: T
  props: EmailProps<T>
  rateLimitPerDay: number
  rateLimitPerSecond: number
  redis: Redis
}) => {
  const { html, text } = await getHtmlAndText({
    name,
    props,
  })

  const developerMail = undefined

  if (import.meta.dev && !developerMail) {
    throw new Error(
      'Email not sent as `developerMail` must be defined in development!',
    )
  }

  const mailOptionsWithDefaults = {
    from: `"${mailOptions.fromName || SITE_NAME}" <noreply@maev.si>`,
    to: developerMail ? `Developer <${developerMail}>` : mailOptions.to,
    subject: mailOptions.subject,
    text,
    html,
    list: {
      // TODO: add https link (https://github.com/maevsi/vibetype/issues/326)
      unsubscribe: `mailto:contact+unsubscribe@maev.si?subject=Unsubscribe%20${mailOptions.to}`,
    },
    attachments: [
      {
        filename: `${LOGO_CID}.png`,
        content: LOGO,
        cid: LOGO_CID,
      },
      ...([
        EMAIL_NAME_ACCOUNT_PASSWORD_RESET,
        CHANNEL_NAME_ACCOUNT_REGISTRATION,
      ].includes(name)
        ? [
            {
              filename: `${PROFILE_PICTURE_JONAS_CID}.png`,
              content: PROFILE_PICTURE_JONAS,
              cid: PROFILE_PICTURE_JONAS_CID,
            },
          ]
        : []),
    ],
  }

  if (
    process.env.NODE_ENV !== 'production' &&
    mailOptions.to.startsWith('mail+sqitch-')
  ) {
    console.debug(
      'Skipping mail sending for test data email accounts ("mail+sqitch-...").',
    )
    return
  }

  // TODO: implement proper rate limiting
  const sentLast24Hours = await getMailsSentLast24Hours()
  if (sentLast24Hours && sentLast24Hours > rateLimitPerDay) {
    // TODO: notify admin
    throw new Error(
      `More than ${rateLimitPerDay} mails sent in the last day, not sending any more for now to prevent spamming.`,
    )
  }

  await acquireMailRateSlot(rateLimitPerSecond, redis)

  await new Promise<void>((resolve, reject) => {
    transporter.sendMail(mailOptionsWithDefaults, (err, info) => {
      if (err) {
        reject(err)
      } else {
        console.log('Email sent:', info.response)
        resolve()
      }
    })
  })
}

export const getHtmlAndText = async <T extends EmailName>({
  name,
  props,
}: {
  name: T
  props: EmailProps<T>
}) => {
  const component = emailConfig[name].component

  const html = await render(component, props, {
    pretty: import.meta.dev,
  })
  const text = await render(component, props, {
    plainText: true,
  })

  return {
    html,
    text,
  }
}
