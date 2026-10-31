import type Redis from 'ioredis'
import type { AllowedComponentProps, VNodeProps } from 'vue'
import { z } from 'zod'

import type EmailAccountPasswordResetRequest from '~/emails/EmailAccountPasswordResetRequest.vue'
import type EmailAccountRegistration from '~/emails/EmailAccountRegistration.vue'
import type EmailEventInvitation from '~/emails/EmailEventInvitation.vue'

import {
  CHANNEL_NAME_ACCOUNT_PASSWORD_RESET as EMAIL_NAME_ACCOUNT_PASSWORD_RESET,
  CHANNEL_NAME_ACCOUNT_REGISTRATION as EMAIL_NAME_ACCOUNT_REGISTRATION,
  CHANNEL_NAME_EVENT_INVITATION as EMAIL_NAME_EVENT_INVITATION,
} from '#server/utils/notification'

const MAIL_RATE_LIMIT_MAX_WAIT_MS = 10_000

const acquireMailRateSlot = (rateLimitPerSecond: number, redis: Redis) =>
  acquireRateLimitSlot({
    key: 'mail:rate',
    limit: rateLimitPerSecond,
    maxWaitMs: MAIL_RATE_LIMIT_MAX_WAIT_MS,
    redis,
  })

// the same shape as `nuxt-email-renderer`'s own type, which the module does not export
type ExtractComponentProps<TComponent> = TComponent extends new () => {
  $props: infer P
}
  ? Omit<P, keyof VNodeProps | keyof AllowedComponentProps>
  : never

type EmailComponents = {
  [EMAIL_NAME_ACCOUNT_PASSWORD_RESET]: typeof EmailAccountPasswordResetRequest
  [EMAIL_NAME_ACCOUNT_REGISTRATION]: typeof EmailAccountRegistration
  [EMAIL_NAME_EVENT_INVITATION]: typeof EmailEventInvitation
}
export type EmailProps<T extends keyof EmailComponents> = ExtractComponentProps<
  EmailComponents[T]
>

// file names in `app/emails`, where `nuxt-email-renderer` looks for templates
const emailTemplateNames = {
  [EMAIL_NAME_ACCOUNT_PASSWORD_RESET]: 'EmailAccountPasswordResetRequest',
  [EMAIL_NAME_ACCOUNT_REGISTRATION]: 'EmailAccountRegistration',
  [EMAIL_NAME_EVENT_INVITATION]: 'EmailEventInvitation',
} as const satisfies Record<keyof EmailComponents, string>

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
    ...(mailOptions.icalEvent ? { icalEvent: mailOptions.icalEvent } : {}),
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
        EMAIL_NAME_ACCOUNT_REGISTRATION,
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
  const templateName = emailTemplateNames[name]

  const html = await renderEmailComponent<EmailComponents[T]>(
    templateName,
    props,
    { pretty: import.meta.dev },
  )
  const text = await renderEmailComponent<EmailComponents[T]>(
    templateName,
    props,
    { plainText: true },
  )

  // the renderer only returns an object when a template sets a subject, which none does
  return {
    html: typeof html === 'string' ? html : html.html,
    text: typeof text === 'string' ? text : text.html,
  }
}
