import { z } from 'zod'

const emailGetQuerySchema = z.object({
  locale: z.enum(AppLocale).default(AppLocale.EN),
  name: EMAIL_NAMES.optional(),
})

const getDemoEmailProps = (locale: AppLocale) =>
  ({
    [EMAIL_NAMES.enum.account_password_reset_request]: {
      emailAddress: 'user@example.com',
      locale,
      passwordResetVerificationLink:
        'https://example.com/reset-password?token=abcd1234',
      stackDomain: 'example.com',
      timeZone: 'Europe/Berlin',
      username: 'john_doe',
      validUntil: '2024-12-31T23:59:59Z',
    },
    [EMAIL_NAMES.enum.account_registration]: {
      emailAddress: 'newuser@example.com',
      emailAddressVerificationLink:
        'https://example.com/verify-email?token=verify5678',
      locale,
      stackDomain: 'example.com',
      timeZone: 'Europe/Berlin',
      username: 'john_doe',
      validUntil: '2024-12-31T23:59:59Z',
    },
    [EMAIL_NAMES.enum.event_invitation]: {
      emailAddress: 'invitee@example.com',
      eventAttendanceType: 'in-person',
      eventAuthorProfileHref: 'https://example.com/profiles/author123',
      eventAuthorProfilePictureSrc: `data:image/png;base64,${PROFILE_PICTURE_JONAS.toString('base64')}`,
      eventAuthorUsername: 'john_doe',
      eventDescription:
        'Join us for an exciting event on the future of technology and innovation.',
      eventEnd: '2024-10-15T16:00:00Z',
      eventLink: 'https://example.com/events/tech-event',
      eventName: 'Future of Tech 2024',
      eventStart: '2024-10-15T14:00:00Z',
      eventVisibility: 'public',
      locale,
      stackDomain: 'example.com',
      timeZone: 'Europe/Berlin',
    },
  }) as const

const generateEmailContent = async (
  emailNames: EmailName[],
  locale: AppLocale,
): Promise<string> => {
  const demoEmailProps = getDemoEmailProps(locale)
  const allEmails = await Promise.all(
    emailNames.map(async (name) => {
      const demoProps = demoEmailProps[name]
      const email = await getEmail({ name, props: demoProps })
      // browsers cannot resolve the `cid:` sources that reference email attachments
      const attachments = getEmailAttachments(name)
      const html = email.html.replaceAll(/cid:([\w-]+)/g, (source, cid) => {
        const attachment = attachments.find(
          (attachment) => attachment.cid === cid,
        )
        return attachment
          ? `data:image/png;base64,${attachment.content.toString('base64')}`
          : source
      })
      return `<h2>${name}</h2>${html}<hr/><span style="white-space: pre;">${email.text}</span><hr/>`
    }),
  )
  return `<h1>Email preview</h1>${allEmails.join()}`
}

export default defineEventHandler(async (event) => {
  const query = await getQuerySafe({ event, schema: emailGetQuerySchema })
  const emailName = query.name
  const locale = query.locale
  const emailContent = emailName
    ? await generateEmailContent([emailName], locale)
    : await generateEmailContent(EMAIL_NAMES.options, locale)

  return emailContent
})
