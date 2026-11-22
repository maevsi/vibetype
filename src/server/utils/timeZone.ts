import { getCookie, getRequestIP, type RequestEvent } from 'nuxt/server'

export const getTimeZone = async ({
  event,
  isTesting,
}: {
  event: RequestEvent
  isTesting?: boolean
}) => {
  const timeZoneBySsr = event.context.$timeZone

  if (timeZoneBySsr) return timeZoneBySsr

  const timeZoneByCookie = getCookie(event, TIMEZONE_COOKIE_NAME)

  if (timeZoneByCookie) return timeZoneByCookie

  if (!isTesting) {
    const ip = getRequestIP(event, { xForwardedFor: true })

    if (ip) {
      const timeZoneByIpApi = await getTimeZoneByIpApi({ ip })

      if (timeZoneByIpApi) return timeZoneByIpApi
    }
  }
}

export const getTimeZoneByIpApi = async ({ ip }: { ip: string }) => {
  const ipApiResult = await $fetch<{ timezone: string }>(
    `http://geoip:8080/${ip}`,
  ).catch(() => {})

  if (ipApiResult) {
    return ipApiResult.timezone
  }
}
