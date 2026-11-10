export const defineEventOgImage = ({
  alt,
  event,
}: {
  alt: string
  event?: {
    accountByCreatedBy?: { username: string } | null
    addressByAddressId?: { name: string } | null
    description?: string | null
    name: string
    start?: string | null
  } | null
}) => {
  const { locale } = useI18n()
  const timeZone = useTimeZone()

  defineOgImage(
    'Event.takumi',
    event
      ? {
          description: event.description
            ? getStringTruncated({
                string: getTextFromHtml(event.description),
                limit: 200,
                isLastWordIncluded: true,
              })
            : undefined,
          image: `/assets/static/images/event/${getHeroImageName(event.name)}.jpg`,
          locale: locale.value,
          location: event.addressByAddressId?.name,
          start: event.start || undefined,
          timeZone,
          title: event.name,
          username: event.accountByCreatedBy?.username,
        }
      : {},
    { alt },
  )
}
